import { NextApiRequest, NextApiResponse } from "next";
import { serverPusher } from "~/server/pusher";
import redis from "~/server/redis";

type Data = Message;

type Error = {
  warning: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>,
) {
  if (req.method !== "POST") {
    res.status(405).json({ warning: "Method Not Allowed" });
    return;
  }

  const { message }: { message: Message } = req.body;
  const newMessage = {
    ...message,
    created_at: Date.now(),
  };
  const data = {
    [`${newMessage.id}`]: newMessage,
  };
  await redis.hset("messages", data);
  serverPusher.trigger("messages", "new-message", newMessage);

  res.status(202).json(newMessage);
}
