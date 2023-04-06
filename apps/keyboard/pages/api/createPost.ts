import { Post, User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type Data = Post & {
  author: User;
};

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
  if (!session?.user?.nickname) {
    res.status(401).json({ error: "Unauthorized to create post 🦠" });
    return;
  }

  const data: InputDataForRegisterItem = req.body;
  const {
    title,
    price,
    layout,
    color,
    message,
    category,
    status,
    select: brandName,
  } = data;

  try {
    const newPost = await prisma.post.create({
      data: {
        authorId: session.user.id,
        title,
        price,
        color,
        layout,
        content: message,
        category,
        status,
        brandName,
      },
      include: {
        author: true,
      },
    });

    return res.status(202).json(newPost);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
