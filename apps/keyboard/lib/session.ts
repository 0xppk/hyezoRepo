import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";

export async function getServerAuth() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getServerAuth();

  return session?.user;
}
