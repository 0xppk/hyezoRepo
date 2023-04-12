import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type Data = AllUsers;

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

  const session = await getServerAuthSession({ req, res });
  if (!session?.user?.nickname) {
    res.status(401).json({ error: "Unauthorized to load users info 🦠" });
    return;
  }

  try {
    const allUsers = await prisma.user.findMany({
      where: {
        id: {
          not: session?.user.id,
        },
      },
      select: {
        id: true,
        nickname: true,
        image: true,
      },
    });

    if (!allUsers) return;
    return res.status(202).json(allUsers);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
