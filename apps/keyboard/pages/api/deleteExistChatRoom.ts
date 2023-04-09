import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";
import { ExitChatRoom } from "~/types/prisma";

type Data = ExitChatRoom;

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

  const myChatParticipantId: string = req.body;

  try {
    const exitExistChatRoom = await prisma.chatParticipant.delete({
      where: {
        id: myChatParticipantId,
      },

      include: {
        chatroom: {
          include: {
            chatParticipant: {
              where: {
                userId: session.user.id,
              },
            },
          },
        },

        user: {
          include: {
            chatRooms: {
              where: {
                userId: session.user.id,
              },
            },
          },
        },
      },
    });

    return res.status(202).json(exitExistChatRoom);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
