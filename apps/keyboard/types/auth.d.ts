import { type User } from "next-auth";
import { type JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
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
  interface JWT {
    id: string;
    nickname?: string | null;
    role?: Role;
  }
}
