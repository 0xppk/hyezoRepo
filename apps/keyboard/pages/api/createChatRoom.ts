import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type Data = string;

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
    res.status(401).json({ error: "Unauthorized to create chatroom 🦠" });
    return;
  }

  const myUserId = session.user.id;
  const theOthersUserId: string = req.body;

  try {
    const checkExistingChatRoom = await prisma.chatRoom.findFirst({
      where: {
        chatParticipant: {
          every: {
            userId: {
              in: [myUserId, theOthersUserId],
              not: null,
            },
          },
        },
      },
    });

    if (checkExistingChatRoom) {
      return res.status(200).json(checkExistingChatRoom.id);
    }

    const newChatRoom = await prisma.chatRoom.create({
      data: {
        chatParticipant: {
          create: [
            {
              userId: myUserId,
            },
            {
              userId: theOthersUserId,
            },
          ],
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

    return res.status(200).json(newChatRoom.id);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
