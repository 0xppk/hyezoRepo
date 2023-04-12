import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type Data = AuthorsPost;
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
    res.status(401).json({ error: "You are not logined 🦠" });
    return;
  }

  const { authorId } = req.query;
  if (typeof authorId !== "string") throw new Error("Invalid Query String");

  try {
    const authorsPost = await prisma.user.findUnique({
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

    if (!authorsPost) return;
    // @ts-ignore
    return res.status(202).json(authorsPost);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
