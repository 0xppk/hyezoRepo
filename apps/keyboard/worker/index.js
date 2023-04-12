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
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log("[sw.js] Received background message ", payload);

  const { notification, data } = payload;

  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    icon: data.icon,
    link: data.link,
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
