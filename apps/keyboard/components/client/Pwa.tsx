import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { env } from "~/env.mjs";
import { getFirebaseToken } from "~/server/firebase";

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export default function Pwa() {
  const [token, setToken] = useState<string>();
  initializeApp(firebaseConfig);

  useEffect(() => {
    const getMessageToken = async () => {
      try {
        const fbToken = await getFirebaseToken();
        setToken(fbToken);
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    getMessageToken();
  }, []);

  return <div>{token ? `Registration token: ${token}` : "Loading..."}</div>;
}
