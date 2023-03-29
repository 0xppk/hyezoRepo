import { NextApiRequest, NextApiResponse } from "next";
import redis from "~/server/redis";

type Data = Message[];

type Error = {
  warning: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>,
) {
  if (req.method !== "GET") {
    res.status(405).json({ warning: "Method Not Allowed" });
    return;
  }

  const getMessages: Message[] = await redis.hvals("messages");
  const messages = getMessages.sort(({ created_at: a }, { created_at: z }) => z - a);

  res.status(202).json(messages);
}
