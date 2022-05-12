// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, getDocs, doc, setDoc, onSnapshot  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDf2piS9HRwNj-7hk3Jsvwb9529wlvng54",
    authDomain: "beetrade-orderbook.firebaseapp.com",
    projectId: "beetrade-orderbook",
    storageBucket: "beetrade-orderbook.appspot.com",
    messagingSenderId: "644906609341",
    appId: "1:644906609341:web:0c4a4c5b95cbaee94865d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

const fetchOrCreateUser = async (address) => {
  try {
    const q = query(collection(db, "users"), where("address", "==", address));
    const querySnapshot = await getDocs(q);
    let res;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      res = doc.data();
    });
    if(!res){
      let userData = {
        address: address
      }
      await setDoc(doc(db, "users", address), userData);
      return userData;
    } else return res;
  } catch(err){
    alert(err)
  }
}


const sendOrder = async (order) => {
  try {
    let res = await setDoc(doc(db, `${order.pair}-${order.buySell.toUpperCase()}`, order.id), order, { merge: true });
    console.log(res);
  } catch(error){
    console.log(error);
  }
}



const fetchSupportedTokens = async () => {
  try {
    const q = query(collection(db, "tokens"));
    const querySnapshot = await getDocs(q);
    let res = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      res.push(doc.data());
    });
    console.log(res)
    return res;
  } catch(err){
    alert(err)
  }
}

const fetchTokenDetails = async (symbol) => {
  try {
    const q = query(collection(db, "tokens", where("symbol", "==", symbol)));
    const querySnapshot = await getDocs(q);
    console.log('query',querySnapshot)
    let res = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      res.push(doc.data());
    });
    return res;
  } catch(err){
    alert(err)
  }
}

const fetchStakingDetails = async () => {
  try {
    const q = query(collection(db, "staking"));
    const querySnapshot = await getDocs(q);
    let res = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      res.push(doc.data());
    });
    return res;
  } catch(err){
    alert(err)
  }
}

export {
    auth,
    db,
    doc, 
    onSnapshot,
    query,
    collection,
    where,
    fetchOrCreateUser,
    sendOrder,
    fetchSupportedTokens,
    fetchStakingDetails,
    fetchTokenDetails
};