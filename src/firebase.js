import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// TODO: Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

let db = null;

try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (e) {
  console.warn("Firebase init failed — stats will not be recorded:", e.message);
}

export async function logResponse(questionId, score) {
  if (!db) return;
  try {
    await addDoc(collection(db, "responses"), {
      questionId,
      score,
      timestamp: serverTimestamp(),
    });
  } catch (e) {
    console.warn("Failed to log response:", e.message);
  }
}

export async function logResult(typeCode, scores) {
  if (!db) return;
  try {
    await addDoc(collection(db, "results"), {
      typeCode,
      scores,
      timestamp: serverTimestamp(),
    });
  } catch (e) {
    console.warn("Failed to log result:", e.message);
  }
}
