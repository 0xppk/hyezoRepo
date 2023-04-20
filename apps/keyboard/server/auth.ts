import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import { getServerSession, type NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import KakaoProvider from "next-auth/providers/kakao";
import nodemailer from "nodemailer";
import { env } from "~/env.mjs";
import { ActivationMail, SignInMail, TextMail } from "~/lib/smtp";
import { prisma } from "./db";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
    newUser: "/new-user",
  },
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    DiscordProvider({
      clientId: env.DISCORD_ID,
      clientSecret: env.DISCORD_SECRET,
    }),
    KakaoProvider({
      clientId: env.KAKAO_ID,
      clientSecret: env.KAKAO_SECRET,
    }),
    EmailProvider({
      from: env.EMAIL_FROM,
      server: env.EMAIL_SERVER,
      sendVerificationRequest: async ({
        identifier: email,
        provider: { server, from },
        url,
      }) => {
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
          select: {
            emailVerified: true,
          },
        });

        const { host } = new URL(url);
        const transport = nodemailer.createTransport(server);
        const isFirstOrNot = user?.emailVerified
          ? SignInMail({ url, host, email })
          : ActivationMail({ url, host, email });

        const result = await transport.sendMail({
          to: email,
          from,
          subject: `Sign in to ${host}`,
          html: isFirstOrNot,
          text: TextMail({ url, host }),
        });

        if (result && result.messageId) {
          console.log(`Verification email sent to ${email}`);
        } else {
          console.error("Failed to send verification email");
        }
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.nickname = token.nickname;
        session.user.role = token.role;
      }

      return session;
    },

    async jwt({ token, user }) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        nickname: dbUser.nickname,
        role: dbUser.role,
      } as JWT;
    },
  },
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
