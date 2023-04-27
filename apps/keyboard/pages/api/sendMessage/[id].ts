import { NextApiRequest, NextApiResponse } from "next";
import { serverPusher } from "~/server/pusher";
import redis from "~/server/redis";

type TData = Message;
type TError = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData | TError>,
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });

  const { message }: { message: Message } = req.body;

  const { id: chatRoomId } = req.query;

  const data = {
    [`${message.id}`]: message,
  };

  if (typeof chatRoomId !== "string") return;

  try {
    await redis.hset(chatRoomId, data);
    await serverPusher.trigger(chatRoomId, "new-message", message);
    return res.status(202).json(message);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}
