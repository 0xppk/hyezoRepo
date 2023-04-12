import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";
import redis from "~/server/redis";

type Data = ChatRoom;

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

  const chatRoomId: string = req.body;

  try {
    const exitEmptyChatRoom = await prisma.chatRoom.delete({
      where: {
        id: chatRoomId,
      },
    });

    await redis.del(chatRoomId);

    return res.status(202).json(exitEmptyChatRoom);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
