import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";
import { Subscriptions } from "@prisma/client";

type Data = Subscriptions;

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

  const token: string = req.body;

  try {
    const newSubscription = await prisma.subscriptions.create({
      data: {
        endpoint: token,
        userId: session.user.id,
      },
      include: {
        user: true,
      },
    });

    return res.status(202).json(newSubscription);
  } catch (error) {
    return { error: (error as Error).message };
  }
}
