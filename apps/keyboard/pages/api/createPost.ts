import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type TData = { success: boolean };
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
  if (!session?.user?.nickname) {
    res.status(401).json({ message: "Unauthorized to create post 🦠" });
    return;
  }

  const data: InputDataForRegisterItem = req.body;
  const { title, price, layout, color, message, category, status, objDataCombo } =
    data;

  try {
    await prisma.post.create({
      data: {
        authorId: session.user.id,
        title,
        price,
        color,
        layout,
        content: message,
        category,
        status,
        brandName: objDataCombo.name,
      },
      include: {
        author: true,
      },
    });

    return res.status(202).json({ success: true });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}
