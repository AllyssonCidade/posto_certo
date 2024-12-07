import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import firebaseConfig from '@/firebaseConfig'

// Inicialize o Firebase apenas se ainda não estiver inicializado
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]

// Exporte os serviços que serão usados
const auth = getAuth(firebaseApp)

export { firebaseApp, auth }
