import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type TData = { chatRoomId: string }; // chatRoomId 바로 전달
type TError = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData | TError>,
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const session = await getServerAuthSession({ req, res });
  if (!session?.user?.nickname)
    return res.status(401).json({ message: "Unauthorized to create chatroom 🦠" });

  const myUserId = session.user.id;
  const theOthersUserId: string = req.body;

  try {
    const checkExistingChatRoom = await prisma.chatRoom.findFirst({
      where: {
        chatParticipant: {
          every: {
            userId: {
              in: [myUserId, theOthersUserId],
            },
          },
        },
      },
    });

    if (checkExistingChatRoom)
      res.status(200).json({ chatRoomId: checkExistingChatRoom.id });
    else {
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

      return res.status(200).json({ chatRoomId: newChatRoom.id });
    }
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}
