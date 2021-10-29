import { initializeApp } from 'firebase/app';
import firebaseConfig from "./firebase.config";





const initializeAthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAthentication;