import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type TData = { success: boolean };
type TError = { message: string };

export const runtime = "edge";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData | TError>,
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const session = await getServerAuthSession({ req, res });
  if (!session?.user) {
    res.status(401).json({ message: "You are not logined 🦠" });
    return;
  }

  const token: string = req.body;

  try {
    const checkExistSubscription = await prisma.subscription.findFirst({
      where: {
        endpoint: token,
      },
    });

    if (checkExistSubscription) res.status(202).json({ success: true });
    else {
      await prisma.subscription.create({
        data: {
          endpoint: token,
          userId: session.user.id,
        },
        include: {
          user: true,
        },
      });

      return res.status(202).json({ success: true });
    }
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}
