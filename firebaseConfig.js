import { initializeApp } from 'firebase/app'

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyASFsxd3758BxYl91BPAjWwmmaxrmsUWlU',
  authDomain: 'posto-certo-9296e.firebaseapp.com',
  projectId: 'posto-certo-9296e',
  storageBucket: 'posto-certo-9296e.firebasestorage.app',
  messagingSenderId: '926067020720',
  appId: '1:926067020720:web:35292e2d180661672afc75'
}

const app = initializeApp(firebaseConfig)
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
export default app
