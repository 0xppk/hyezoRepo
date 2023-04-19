import { getMessaging, getToken } from "firebase/messaging";
import { env } from "~/env.mjs";

export async function getFirebaseToken() {
  const messaging = getMessaging();

  if (!("serviceWorker" in navigator)) return;

  try {
    /**
     * 등록된 서비스워커 있으면 그대로, 없으면 새로 등록.
     * Next PWA와 통합되어 sw.js 로 경로 변경 (디폴트는 firebase-messagine-sw.js)
     */
    let sw = await navigator.serviceWorker.getRegistration();
    if (!sw) sw = await navigator.serviceWorker.register("/sw.js");

    // 등록된 서비스워커 경로로 토큰 발급 (접속한 브라우저에 따라 다른 토큰값)
    const token = await getToken(messaging, {
      vapidKey: env.NEXT_PUBLIC_VAPID_KEY,
      serviceWorkerRegistration: sw,
    });

    return token;
  } catch (error) {
    console.error(error);
  }
}
