import { getMessaging, getToken } from "firebase/messaging";
import { env } from "~/env.mjs";

export async function getFirebaseToken() {
  const messaging = getMessaging();

  if (!("serviceWorker" in navigator)) return;

  try {
    // 등록된 서비스워커 있으면 그대로, 없으면 새로 등록
    let sw = await navigator.serviceWorker.getRegistration();
    if (!sw) sw = await navigator.serviceWorker.register("/sw.js");

    // 등록된 서비스워커 경로로 토큰 발급 (firebase 디폴트 경로 x)
    const token = await getToken(messaging, {
      vapidKey: env.NEXT_PUBLIC_VAPID_KEY,
      serviceWorkerRegistration: sw,
    });

    return { token, sw };
  } catch (error) {}
}
