import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type Data = string;

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
  if (!session?.user) {
    res.status(401).json({ error: "You are not logined 🦠" });
    return;
  }
  
  const nickname: string = req.body;

  try {
    await prisma.user.update({
      where: {
        id: session?.user.id,
      },
      data: {
        nickname,
      },
    });

    return res.status(202).json(nickname);
  } catch (error) {
    return { error: (error as Error).message };
  }
}
