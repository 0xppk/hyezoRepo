import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";

type Data = Post[];

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

  try {
    const allPosts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            image: true,
            nickname: true,
            posts: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!allPosts) return;
    // @ts-ignore
    else return res.status(202).json(allPosts);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
