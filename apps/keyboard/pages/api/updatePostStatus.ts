import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type TData = { success: boolean };
type TError = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData | TError>,
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });

  const session = await getServerAuthSession({ req, res });
  if (!session?.user) return res.status(401).json({ message: "You are not logined 🦠" });

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

    return res.status(202).json({ success: true });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}
