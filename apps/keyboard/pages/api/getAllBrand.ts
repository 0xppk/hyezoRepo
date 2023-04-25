import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { TBrand } from "~/types/prisma";

type TData = TBrand[];
type TError = { message: string };

export const config = {
  runtime: "edge",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData | TError>,
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method Not Allowed" });

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
    return res.status(500).json({ message: (error as Error).message });
  }
}
