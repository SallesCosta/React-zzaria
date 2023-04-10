// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBltCaP4yvnoKaDxF6PtuaeEqM42tx4wQo',
  authDomain: 'pizzaria-330c3.firebaseapp.com',
  projectId: 'pizzaria-330c3',
  storageBucket: 'pizzaria-330c3.appspot.com',
  messagingSenderId: '369925656391',
  appId: '1:369925656391:web:e2de77885eecc05560c662',
  measurementId: 'G-BNCBRV6LLK',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
