import { initializeApp } from "firebase/app";
import dynamic from "next/dynamic";
import { firebaseConfig } from "~/worker/firebase-config";

const MessageAlarm = dynamic(() => import("~/components/client/MessageAlarm"), {
  ssr: false,
});

export default function Subscriber() {
  const app = initializeApp(firebaseConfig);

  return <MessageAlarm app={app} />;
}
