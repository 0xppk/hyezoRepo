import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { type TItems } from "~/types/prisma";

type TData = TItems[] | { alert: string };
type TError = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData | TError>,
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method Not Allowed" });

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

    return res.status(202).json(allPosts);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}
