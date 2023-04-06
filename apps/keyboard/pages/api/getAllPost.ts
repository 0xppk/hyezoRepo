import { Post } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";
import { z } from "zod";

type Data = Post[];

type Err = {
  error: string;
};

const categorySchema = z.object({
  category: z.enum(["BUY", "SELL"]),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Err>,
) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  // const session = await getServerAuthSession({ req, res });
  // if (!session?.user?.nickname) {
  //   res.status(401).json({ error: "Unauthorized to load items 🦠" });
  //   return;
  // }

  const { category } = categorySchema.parse(req.query);

  try {
    const allPosts = await prisma.post.findMany({
      where: {
        category,
      },
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
    });
    return res.status(202).json(allPosts);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
