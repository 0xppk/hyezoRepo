(()=>{importScripts("https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js"),importScripts("https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js");firebase.initializeApp({apiKey:"AIzaSyBFGGLL1ayJzdlFmhA6yevCIlV4PQ8_pe4",authDomain:"hello-keyboard.firebaseapp.com",projectId:"hello-keyboard",storageBucket:"hello-keyboard.appspot.com",messagingSenderId:"122267586933",appId:"1:122267586933:web:2be0ed3ea3ef44bda8433c",measurementId:"G-8NLF6DGE9L"});firebase.messaging().onBackgroundMessage((e=>{console.log("[sw.js] Received background message ",e);const{notification:i,data:a}=e,o=i.title,s={body:i.body,icon:a.icon,link:a.link};self.registration.showNotification(o,s)})),self.addEventListener("notificationclick",(e=>{self.clients.openWindow("https://hello-keyboard.vercel.app"),e.notification.close()}))})();