import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type Data = string;

type Err = {
  warning: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Err>,
) {
  if (req.method !== "POST") {
    res.status(405).json({ warning: "Method Not Allowed" });
    return;
  }

  const session = await getServerAuthSession({ req, res });
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

    res.status(202).json(nickname);
    return { success: true };
  } catch (error) {
    return { error: (error as Error).message };
  }
}
