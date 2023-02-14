// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAvZJPG-0aQ5bQgrPkw0_F66ZAG8wm8s0c",
    authDomain: "fir-test-project-5aef1.firebaseapp.com",
    databaseURL: "https://fir-test-project-5aef1-default-rtdb.firebaseio.com",
    projectId: "fir-test-project-5aef1",
    storageBucket: "fir-test-project-5aef1.appspot.com",
    messagingSenderId: "507410358156",
    appId: "1:507410358156:web:f5e3c29412632d586980a9",
    measurementId: "G-SRN6G46E4L"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const imagesRef = ref(storage, 'images')






