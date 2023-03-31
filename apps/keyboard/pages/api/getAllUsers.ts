import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type Data = Session["user"][];

type Err = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Err>,
) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const session = await getServerAuthSession({ req, res });
  const allUsers = await prisma.user.findMany({
    where: {
      nickname: {
        not: session?.user.nickname,
      },
    },
  });
  return res.status(202).json(allUsers);
}
