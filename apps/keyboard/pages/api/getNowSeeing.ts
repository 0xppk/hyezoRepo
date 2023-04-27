import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";
import { z } from "zod";

type TData = boolean;
type TError = { message: string };

const StringQuerySchema = z.object({
  authorId: z.string(),
  chatRoomId: z.string(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData | TError>,
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method Not Allowed" });

  const session = await getServerAuthSession({ req, res });
  if (!session?.user?.nickname)
    return res.status(401).json({ message: "Unauthorized to load users info 🦠" });

  const { authorId, chatRoomId } = StringQuerySchema.parse(req.query);
  if (!authorId || authorId === "deletedAccount")
    return res.status(404).json({ message: "It seems the user deleted the account 🥶" });

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
    return res.status(500).json({ message: (error as Error).message });
  }
}
