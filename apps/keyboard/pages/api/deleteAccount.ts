import { NextApiRequest, NextApiResponse } from "next";
import { signOut } from "next-auth/react";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type Data = User;

type Err = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Err>,
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const session = await getServerAuthSession({ req, res });
  if (!session?.user?.nickname) {
    res.status(401).json({ error: "Unauthorized to create post 🦠" });
    return;
  }

  try {
    const deleteAccount = await prisma.user.delete({
      where: {
        id: session.user.id,
      },
    });

    signOut();
    // @ts-ignore
    return res.status(202).json(deleteAccount);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
