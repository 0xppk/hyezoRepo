import { Prisma } from "@prisma/client";
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

  const myNickname = session.user.nickname;
  const theOthersNickname: string = req.body;

  try {
    const newChatRoom = await prisma.chatRoom.create({
      data: {
        ChatParticipant: {
          create: [
            {
              userName: myNickname,
            },
            {
              userName: theOthersNickname,
            },
          ],
        },
      },

      include: chatRoomPopulated,
    });

    return res.status(202).json(newChatRoom.id);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}

/**
 * 프리즈마에서 자주쓰고 늘어지고 Include를 스플릿하는 법
 */
export const participantPopulated = Prisma.validator<Prisma.ChatParticipantInclude>()({
  user: {
    select: {
      id: true,
      nickname: true,
      image: true,
    },
  },
});

export const chatRoomPopulated = Prisma.validator<Prisma.ChatRoomInclude>()({
  ChatParticipant: {
    include: participantPopulated,
  },
});
