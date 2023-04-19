import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

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
    const checkExistSubscription = await prisma.subscription.findFirst({
      where: {
        endpoint: token,
      },
    });

    if (checkExistSubscription) res.status(202).json(checkExistSubscription);
    else {
      const newSubscription = await prisma.subscription.create({
        data: {
          endpoint: token,
          userId: session.user.id,
        },
        include: {
          user: true,
        },
      });

      return res.status(202).json(newSubscription);
    }
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
