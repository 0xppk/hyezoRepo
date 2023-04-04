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
  if (!session?.user?.nickname) {
    res.status(401).json({ error: "Unauthorized to load users info 🦠" });
    return;
  }

  try {
    const allUsers = await prisma.user.findMany({
      where: {
        nickname: {
          not: session?.user.nickname,
        },
      },
      select: {
        id: true,
        nickname: true,
        image: true,
      },
    });
    return res.status(202).json(allUsers);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
