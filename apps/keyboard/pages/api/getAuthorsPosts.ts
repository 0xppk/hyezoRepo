import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";
import { TAuthor } from "~/types/prisma";

type TData = TAuthor;
type TError = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData | TError>,
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method Not Allowed" });

  const session = await getServerAuthSession({ req, res });

  if (!session?.user?.nickname)
    return res.status(401).json({ message: "Unauthorized to load users info 🦠" });

  const { authorId } = req.query;
  if (typeof authorId !== "string") throw new Error("Invalid query string");

  try {
    const authorsPost = await prisma.user.findUniqueOrThrow({
      where: {
        id: authorId,
      },
      include: {
        posts: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    return res.status(202).json(authorsPost);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}
