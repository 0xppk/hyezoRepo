import Pusher from "pusher";
import ClientPusher from "pusher-js";
import { env } from "~/env.mjs";

export const serverPusher = new Pusher({
  appId: env.NEXT_PUBLIC_PUSHER_APP_ID!,
  key: env.NEXT_PUBLIC_PUSHER_ID!,
  secret: env.NEXT_PUBLIC_PUSHER_SECRET!,
  cluster: "ap3",
  useTLS: true,
});

export const clientPusher = new ClientPusher(env.NEXT_PUBLIC_PUSHER_ID!, {
  cluster: "ap3",
  forceTLS: true,
});
