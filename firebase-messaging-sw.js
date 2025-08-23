importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAwmhg4ZAqqlV5NTyYZNH2MT8m1YQxHkzo",
  authDomain: "elephant-monitoring-app-99ffd.firebaseapp.com",
  projectId: "elephant-monitoring-app-99ffd",
  storageBucket: "elephant-monitoring-app-99ffd.firebasestorage.app",
  messagingSenderId: "649960879930",
  appId: "1:649960879930:web:d6f703cea9029a2fd14203",
  databaseURL: "https://elephant-monitoring-app-99ffd-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

const messaging = firebase.messaging();

// Optional: handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification?.title || 'New Notification';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: payload.notification?.icon || '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
