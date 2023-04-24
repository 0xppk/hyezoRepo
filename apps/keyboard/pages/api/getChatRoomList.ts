import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";
import { TChatRoom } from "~/types/prisma";

type TData = TChatRoom[];
type TError = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData | TError>,
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method Not Allowed" });

  const session = await getServerAuthSession({ req, res });
  if (!session?.user?.nickname)
    return res.status(401).json({ message: "Unauthorized to load users info 🦠" });

  const myUserId = session.user.id;

  try {
    const chatRoomList = await prisma.chatRoom.findMany({
      where: {
        chatParticipant: {
          some: {
            userId: {
              equals: myUserId,
            },
          },
        },
      },

      include: {
        chatParticipant: {
          include: {
            user: {
              select: {
                id: true,
                nickname: true,
                image: true,
              },
            },
          },
        },
      },
    });

    return res.status(202).json(chatRoomList);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}
