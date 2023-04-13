import {
  cert,
  getApp,
  initializeApp,
  type App,
  type AppOptions,
} from "firebase-admin/app";
import { MulticastMessage, getMessaging } from "firebase-admin/messaging";
import { FirebaseError } from "firebase/app";
import { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

const global = globalThis as unknown as { firebase: App };

type Data = number;

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

  const authorId: string = req.body;

  const serviceAccount = require("firebase-account.json");
  const firebaseConfig: AppOptions = {
    credential: cert(serviceAccount),
    databaseURL: env.FIREBASE_ADMIN_DATABASE_URL,
  };

  try {
    getApp();
  } catch (error) {
    if ((error as FirebaseError).code === "app/no-app")
      global.firebase = initializeApp(firebaseConfig);
  }

  try {
    const subTokens = await prisma.subscription.findMany({
      where: {
        userId: authorId,
      },
      select: {
        endpoint: true,
      },
    });

    if (!subTokens) return;

    const endpoints = subTokens.map(obj => obj.endpoint);
    console.log(endpoints);
    const message: MulticastMessage = {
      data: {
        icon: "/images/logo.png",
        link: "https://hello-keyboard.vercel.app",
      },
      notification: {
        title: "테스트",
        body: "테스트입니다",
      },
      tokens: endpoints,
    };

    const sendMessage = await getMessaging(global.firebase).sendMulticast(message);
    console.log(sendMessage.successCount + " messages were sent successfully");

    return res.status(202).json(sendMessage.successCount);
  } catch (error) {
    console.error("Error sending push notification:", error);
    return { error: (error as Error).message };
  }
}
