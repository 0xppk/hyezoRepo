import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type TData = { success: boolean };
type TError = { message: string };

export const runtime = "edge";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData | TError>,
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const session = await getServerAuthSession({ req, res });
  if (!session?.user || session?.user?.role === "USER") {
    res.status(401).json({ message: "Unauthorized to access to admin page 🦠" });
    return;
  }

  const data: InputDataForRegisterManufacture = req.body;
  const { title, select, select2, select3 } = data;

  try {
    await prisma.brand.create({
      data: {
        name: title,
        type: select,
        nation: select2,
        status: select3,
      },
    });

    return res.status(202).json({ success: true });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}
