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

  /** 채팅룸 아이디 */
  const { id } = req.query;

  const data = {
    [`${message.id}`]: message,
  };

  if (typeof id !== "string") return;
  await redis.hset(id, data);
  serverPusher.trigger(id, "new-message", message);
  res.status(202).json(message);
}
