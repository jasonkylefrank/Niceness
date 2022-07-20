import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC__FIREBASE_CONFIG__API_KEY,
  authDomain: process.env.NEXT_PUBLIC__FIREBASE_CONFIG__AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC__FIREBASE_CONFIG__PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC__FIREBASE_CONFIG__STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC__FIREBASE_CONFIG__MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC__FIREBASE_CONFIG__APP_ID,
  measurementId: process.env.NEXT_PUBLIC__FIREBASE_CONFIG__MEASUREMENT_ID
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

let analytics;
// analytics needs a browser
if (firebaseApp.name && typeof window !== 'undefined') {
  analytics = getAnalytics(firebaseApp);
}

export { firebaseApp, analytics };