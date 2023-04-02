import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";
import { ChatRooms } from "~/types/db";
import { chatRoomPopulated } from "./createChatRoom";

type Data = ChatRooms;
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
    res.status(401).json({ error: "You are not logined 🦠" });
    return;
  }

  const {
    user: { nickname },
  } = session;

  try {
    const chatRoomList = await prisma.chatRoom.findMany({
      where: {
        ChatParticipant: {
          some: {
            userName: {
              equals: nickname,
            },
          },
        },
      },

      include: chatRoomPopulated,
    });

    return res.status(202).json(chatRoomList);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
