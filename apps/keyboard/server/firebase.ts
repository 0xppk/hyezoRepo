import { getMessaging, getToken } from "firebase/messaging";
import { env } from "~/env.mjs";

export async function getFirebaseToken() {
  const messaging = getMessaging();
  const token = await getToken(messaging, {
    vapidKey: env.NEXT_PUBLIC_VAPID_KEY,
  });

  return token;
}
