import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type Data = { message: "success" | "skipped" };

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

  const token: string = req.body;

  try {
    const checkExistSubscription = await prisma.subscription.findFirst({
      where: {
        endpoint: token,
      },
    });

    if (!checkExistSubscription) res.status(202).json({ message: "skipped" });
    else {
      await prisma.subscription.delete({
        where: {
          endpoint: token,
        },
      });

      // @ts-ignore
      return res.status(202).json({ message: "success" });
    }
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
