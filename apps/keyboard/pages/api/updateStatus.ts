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

  const { status, postId } = req.body;

  try {
    await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        status,
      },
    });

    return res.status(202).json(status);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
