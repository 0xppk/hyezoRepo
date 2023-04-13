import { useEffect, useState } from "react";
import { getFirebaseToken } from "~/server/firebase";

type ServiceWorkerType = {
  token: string;
  sw: ServiceWorkerRegistration;
};

export default function useServiceWorker() {
  const [data, setSw] = useState<ServiceWorkerType>();

  useEffect(() => {
    (async () => {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        const token = await getFirebaseToken();
        setSw(token);
      } else {
        console.log("알림 수신 거부");
      }
    })();
  }, []);

  return { data };
}
