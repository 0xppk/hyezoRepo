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

  try {
    const allUsers = await prisma.user.findMany({
      select: {
        id: true,
        nickname: true,
        image: true,
      },
    });

    return res.status(202).json(allUsers);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}
