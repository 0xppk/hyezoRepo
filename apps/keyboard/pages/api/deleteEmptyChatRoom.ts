import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";
import redis from "~/server/redis";

type TData = { success: boolean };
type TError = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData | TError>,
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });

  const session = await getServerAuthSession({ req, res });
  if (!session?.user?.nickname) {
    res.status(401).json({ message: "Unauthorized to create post 🦠" });
    return;
  }

  const chatRoomId: string = req.body;

  try {
    await prisma.chatRoom.delete({
      where: {
        id: chatRoomId,
      },
    });

    await redis.del(chatRoomId);

    return res.status(202).json({ success: true });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}
