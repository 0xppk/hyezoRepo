import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

type Data = Brand;

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
  if (!session?.user || session?.user?.role === "USER") {
    res.status(401).json({ error: "Unauthorized to access to admin page 🦠" });
    return;
  }

  const data: InputDataForRegisterManufacture = req.body;
  const { title, select, select2, select3 } = data;

  try {
    const newBrand = await prisma.brand.create({
      data: {
        name: title,
        type: select,
        nation: select2,
        status: select3,
      },
    });

    // @ts-ignore
    return res.status(202).json(newBrand);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
