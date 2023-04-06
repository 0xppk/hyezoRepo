import { Brand } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";

type Data = Pick<Brand, "id" | "name">[];

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

  try {
    const allBrands = await prisma.brand.findMany({
      select: {
        id: true,
        name: true,
        type: true,
      },
    });
    return res.status(202).json(allBrands);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
