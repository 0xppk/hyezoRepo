/// <reference lib="webworker" />
import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

export default null;
declare let self: ServiceWorkerGlobalScope;

const firebaseConfig = {
  apiKey: "AIzaSyBFGGLL1ayJzdlFmhA6yevCIlV4PQ8_pe4",
  authDomain: "hello-keyboard.firebaseapp.com",
  projectId: "hello-keyboard",
  storageBucket: "hello-keyboard.appspot.com",
  messagingSenderId: "122267586933",
  appId: "1:122267586933:web:2be0ed3ea3ef44bda8433c",
  measurementId: "G-8NLF6DGE9L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onBackgroundMessage(messaging, payload => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/images/logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
