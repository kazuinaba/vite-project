import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "./router/index"; // 追加

import "bootstrap/dist/css/bootstrap.min.css" //　追加

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRLCiUqm4iM9K8Sm6czpEdP5-yaFQYGwk",
  authDomain: "vite-project-d3cae.firebaseapp.com",
  projectId: "vite-project-d3cae",
  storageBucket: "vite-project-d3cae.appspot.com",
  messagingSenderId: "395875907986",
  appId: "1:395875907986:web:565c2111a6614d0c11e94b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app"); // 変更
