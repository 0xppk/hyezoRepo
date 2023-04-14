importScripts("https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js");
importScripts(
  "https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js",
);

const firebaseConfig = {
  apiKey: "AIzaSyBFGGLL1ayJzdlFmhA6yevCIlV4PQ8_pe4",
  authDomain: "hello-keyboard.firebaseapp.com",
  projectId: "hello-keyboard",
  storageBucket: "hello-keyboard.appspot.com",
  messagingSenderId: "122267586933",
  appId: "1:122267586933:web:2be0ed3ea3ef44bda8433c",
  measurementId: "G-8NLF6DGE9L",
};

const handleClick = e => {
  e.notification.close();
  console.log(e.notification.close);
  clients.openWindow(e.notification.data.link);
};
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(async payload => {
  console.log("부재중 메시지", payload);

  const { data } = payload;

  const notificationTitle = data.title;
  const notificationOptions = {
    body: data.body,
    icon: data.icon,
    data: data.link,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", handleClick);
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
