import { useEffect } from "react";
import { useUserSession } from "~/hooks";
import { fetchPost } from "~/lib/utils";
import { getFirebaseToken } from "~/worker/firebase";

export default function useServiceWorker(pushAgree: boolean) {
  const user = useUserSession();

  useEffect(() => {
    (async () => {
      const token = await getFirebaseToken();

      if (pushAgree) {
        const permission = await Notification.requestPermission();
        if (permission === "granted")
          try {
            await fetchPost("/api/createSubscription", {
              body: JSON.stringify(token),
            });
          } catch (error) {
            console.error(error);
          }
      } else {
        await fetchPost("/api/deleteSubscription", {
          body: JSON.stringify(token),
        });
        console.log("알림 수신 거부");
      }
    })();
  }, [pushAgree, user]);
}
