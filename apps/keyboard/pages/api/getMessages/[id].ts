import { NextApiRequest, NextApiResponse } from "next";
import redis from "~/server/redis";

type Data = Message[];

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

  /** 채팅룸 아이디 */
  const { id } = req.query;
  if (typeof id !== "string") throw new Error("Invalid Query String");

  try {
    const getMessages: Message[] = await redis.hvals(id);
    const messages = getMessages.sort(
      ({ created_at: a }, { created_at: z }) => a - z,
    );
    return res.status(202).json(messages);
  } catch (error) {
    return res.status(405).json({ error: "Messages Cannot Found" });
  }
}
