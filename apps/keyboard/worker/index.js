importScripts("https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js");
importScripts(
  "https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js",
);

self.addEventListener("fetch", () => {
  const urlParams = new URLSearchParams(location.search);
  self.firebaseConfig = Object.fromEntries(urlParams);
});

const defaultConfig = {
  apiKey: true,
  authDomain: true,
  projectId: true,
  storageBucket: true,
  messagingSenderId: true,
  appId: true,
  measurementId: true,
};

const handleClick = event => {
  event.notification.close();
  console.log(event.notification.data.link);
  clients.openWindow(event.notification.data.link);
};
// fixme 에러는 없는데 작동을 안함..
self.addEventListener("notificationclick", handleClick);

const app = firebase.initializeApp(self.firebaseConfig || defaultConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log("부재중 메시지", payload);

  const { data } = payload;

  const notificationTitle = data.title;
  const notificationOptions = {
    body: data.body,
    icon: data.icon,
    data: { link: data.link },
    vibrate: [400, 100, 500],
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
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

// self.addEventListener("notificationclick", event => {
//   self.clients.openWindow("https://hello-keyboard.vercel.app");
//   event.notification.close();
// });
