import { BatchResponse, getMessaging } from "firebase-admin/messaging";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type Data = BatchResponse;

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
  if (!session?.user) {
    res.status(401).json({ error: "You are not logined 🦠" });
    return;
  }

  const authorId: string = req.body;

  try {
    const subTokens = await prisma.subscription.findMany({
      where: {
        userId: authorId,
      },
      select: {
        endpoint: true,
      },
    });

    if (!subTokens) return;

    const endpoints = subTokens.map(obj => obj.endpoint);

    const message = {
      data: {
        icon: "/images/logo.png",
      },
      notification: {
        title: "테스트",
        body: "테스트입니다",
      },
      tokens: endpoints,
    };

    const sendMessage = await getMessaging().sendMulticast(message);

    console.log(sendMessage.successCount + " messages were sent successfully");
    return res.status(202).json(sendMessage);
  } catch (error) {
    return { error: (error as Error).message };
  }
}
