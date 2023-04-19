import { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";

type TData = { revalidated: boolean };
type TError = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData | TError>,
) {
  if (req.query.secret !== env.NEXT_PUBLIC_HYEZO_SECRET)
    res.status(401).json({ message: "Invalid token" });

  try {
    console.log("리벨리데이트 시작");
    await res.revalidate("/");
    console.log("리벨리데이트 완료");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: "Error revalidating" });
  }
}
