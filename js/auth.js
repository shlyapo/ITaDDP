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
            const tickets = {
                "oj5isoCD2zPh0cVUVCgiVnam7n13":{
                "-2": "/src/images/ticket_with_registration-1.pdf",
                "-1": "/src/images/ticket_with_registration-1.pdf",
                "0": "/src/images/ticket_with_registration-1.pdf",
                "1": "/src/images/ticket_with_registration-1.pdf",
                "2": "/src/images/ticket_with_registration-1.pdf"
              },
              "wZL9yxB1y2QzCNNBCbNfw08ty3c2":
              {
                "-2": "/src/images/ticket_with_registration-1.pdf",
                "1": "/src/images/ticket_with_registration-1.pdf",
                "2": "/src/images/ticket_with_registration-1.pdf"
              },
              };
              localStorage.setItem("ticket", JSON.stringify(tickets));
            console.log('User is logged in');
            window.location.href = "../index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
});