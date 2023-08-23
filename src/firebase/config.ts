// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDfSElN56QVPqvh_0h5Z6C-mQkhecHzzi8',
  authDomain: 'vue-firebase-46451.firebaseapp.com',
  projectId: 'vue-firebase-46451',
  storageBucket: 'vue-firebase-46451.appspot.com',
  messagingSenderId: '630797821912',
  appId: '1:630797821912:web:8bd7d1e2da6b1a9f77b4ad',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
