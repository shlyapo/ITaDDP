import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import firebaseConfig from '../firebase.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signInForm = document.getElementById("auth-form");

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signInForm['email'].value;
    const password = signInForm['psw'].value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log('User is logged in');
            window.location.href = "../index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
});