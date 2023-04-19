import { type DefaultSession } from "next-auth";
import { type JWT, type DefaultJWT } from "next-auth/jwt";

type UserId = string;

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: UserId;
      emailVerified?: Date | null;
      nickname?: string | null;
      chatRoom?: ChatParticipant[];
      posts?: Post[];
      role?: Role;
      created_at: Date;
      updated_at: Date;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: UserId;
    nickname?: string | null;
    role?: Role;
  }
}
