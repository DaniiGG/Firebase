import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports



export const firebaseApp = initializeApp({
    apiKey: "AIzaSyBXDW047x_Xqm-Vn1wh_IAgukKjPA9nG0Q",
    authDomain: "tienda-online-ad51e.firebaseapp.com",
    projectId: "tienda-online-ad51e",
    storageBucket: "tienda-online-ad51e.appspot.com",
    messagingSenderId: "785946513553",
    appId: "1:785946513553:web:f2e451ba43bcedde3faf30",
    measurementId: "G-42C4Z52NRM"

})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')