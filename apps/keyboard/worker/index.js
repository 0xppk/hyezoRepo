importScripts("https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js");
importScripts(
  "https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js",
);

// /// <reference lib="webworker" />
// export default null;
// declare let self: ServiceWorkerGlobalScope;

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
if (!firebase.app.length) firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

/**
 * 클라이언트에 접속해 있는 사람은
 * import { getMessaging, onMessage } from "firebase/messaging";
 * onMessage를 이용해 pwa 컴퍼넌트에서 처리.
 * sw 파일에서는 백그라운드 처리만.
 */

messaging.onBackgroundMessage(payload => {
  console.log("부재중 메시지", payload);

  const { data } = payload;

  const notificationTitle = data.title;
  const notificationOptions = {
    body: data.body,
    icon: data.icon,
    timestamp: Date.now(),
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", event => {
  self.clients.openWindow("https://hello-keyboard.vercel.app");
  event.notification.close();
});

/** fcm 안쓸경우 */
// self.addEventListener("push", event => {
//   const message = event.data?.json();
//   event.waitUntil(
//     self.registration.showNotification(message.title, {
//       body: message.body,
//     }),
//   );
// });
