import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "~/server/auth";

export async function getServerAuth() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getServerAuth();
  return session?.user;
}

export async function requireSignIn() {
  const user = await getCurrentUser();

  // 닉네임 생성이 회원가입 완료의 기준
  if (!user?.nickname) redirect("/sign-in");
}
