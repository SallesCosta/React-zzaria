import { getDocs, collection, addDoc } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'
import { DataProps } from '@/contexts/orderContext'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)

export const getFromDb = async (coll: string) => {
  const querySnap = getDocs(collection(db, coll))
  const documents = (await querySnap).docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }))
  return documents
}

export const saveData = async (coll: string, data: DataProps) => {
  try {
    await addDoc(collection(db, coll), data)
  } catch (err: unknown) {
    console.log('Erro ao tentar salvar: ', err)
  }
}
