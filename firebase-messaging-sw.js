importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAwmhg4ZAqqlV5NTyYZNH2MT8m1YQxHkzo",
  authDomain: "elephant-monitoring-app-99ffd.firebaseapp.com",
  projectId: "elephant-monitoring-app-99ffd",
  storageBucket: "elephant-monitoring-app-99ffd.firebasestorage.app",
  messagingSenderId: "649960879930",
  appId: "1:649960879930:web:d6f703cea9029a2fd14203"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const notificationTitle = payload.notification?.title || 'EMA Alert';
  const notificationOptions = {
    body: payload.notification?.body || 'Check the elephant reports',
    icon: '/ema/icon.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
