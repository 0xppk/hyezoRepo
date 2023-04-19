import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type Data = ChatParticipant;

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
  if (!session?.user) {
    res.status(401).json({ error: "You are not logined 🦠" });
    return;
  }

  const { nowSeeing, chatRoomId } = req.body;

  try {
    const findParticipant = await prisma.chatParticipant.findFirstOrThrow({
      where: {
        chatRoomId,
        userId: session.user.id,
      },
      select: {
        id: true,
      },
    });

    const { id: myParticipantId } = findParticipant;

    const updateNowSeeing = await prisma.chatParticipant.update({
      where: {
        id: myParticipantId,
      },

      data: {
        nowSeeing,
      },

      include: {
        user: true,
      },
    });

    return res.status(202).json(updateNowSeeing);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
