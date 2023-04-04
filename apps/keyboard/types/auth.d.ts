import { ChatParticipant, Post, Role } from "@prisma/client";
import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      emailVerified?: Date | null;
      nickname?: string | null;
      chatRoom?: ChatParticipant[];
      posts?: Post[];
      role?: Role;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    nickname?: string | null;
  }
}
