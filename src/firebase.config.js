import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyB2-3Pntd4QJASkDlUuv8fREUzJ0WpPXKI",
    authDomain: "restaurant-ca5ed.firebaseapp.com",
    databaseURL: "https://restaurant-ca5ed-default-rtdb.firebaseio.com",
    projectId: "restaurant-ca5ed",
    storageBucket: "restaurant-ca5ed.appspot.com",
    messagingSenderId: "810004957824",
    appId: "1:810004957824:web:aca4e4185af967b84c3465"
  };

const app = getApps.length>0 ? getApp():initializeApp(firebaseConfig);

const firestore= getFirestore(app)
const storage=getStorage(app)

export {app,firestore,storage};