import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// PEGA AQUÍ TU CONFIGURACIÓN DE FIREBASE
const firebaseConfig = {
 apiKey: "AIzaSyBoeirEXrGeSTsnt5vkI7U3F0FKi37Rwxw",
  authDomain: "portafoliocoments.firebaseapp.com",
  projectId: "portafoliocoments",
  storageBucket: "portafoliocoments.firebasestorage.app",
  messagingSenderId: "1064487330493",
  appId: "1:1064487330493:web:f03e96cec635b5e13acdd4",
  measurementId: "G-Q98KCNHBYK"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtiene Firestore
const db = getFirestore(app);

// Exporta la base de datos
export { db };