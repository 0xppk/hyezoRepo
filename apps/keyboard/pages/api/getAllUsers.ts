import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";
import { TUser } from "~/types/prisma";

type TData = TUser[];
type TError = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData | TError>,
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method Not Allowed" });

  const session = await getServerAuthSession({ req, res });

  // if (!session?.user?.nickname)
  //   return res.status(401).json({ message: "Unauthorized to load users info 🦠" });

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
    return res.status(500).json({ message: (error as Error).message });
  }
}
