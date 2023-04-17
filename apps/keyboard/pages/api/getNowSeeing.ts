import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";
import { z } from "zod";

type Data = boolean;

type Err = {
  error: string;
};

const StringQuerySchema = z.object({
  authorId: z.string(),
  chatRoomId: z.string(),
});

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

  const { authorId, chatRoomId } = StringQuerySchema.parse(req.query);

  try {
    const nowSeeingStatus = await prisma.chatParticipant.findFirstOrThrow({
      where: {
        chatRoomId,
        userId: authorId,
      },

      select: {
        nowSeeing: true,
      },
    });

    const { nowSeeing } = nowSeeingStatus;

    return res.status(202).json(nowSeeing);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
