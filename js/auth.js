import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";
  import { User } from "./user";
  const { app } = require("./firebase");
  const auth = getAuth(app);

function getAuthForm() {
    return `
    <form onsubmit="return false;">
    <div class="container">
      <h1>Login</h1>

      <label for="id"><b>Identificator</b></label>
      <input id="enter_login" type="text" placeholder="Enter Email" name="email" required>
      <div id="email-empty-error" class="err err-not-display">The field is required</div>
      <div id="email-error" class="err err-not-display">Email is not correct</div>

      <label for="psw"><b>Password</b></label>
      <input id="enter_password" type="password" placeholder="Enter Password" name="psw" required>
      <div id="password-empty-error" class="err err-not-display">The field is required</div>
      <div id="password-error" class="err err-not-display">The length must be more or equal than 6 characters</div>
      <div></div>
      <div id="login-pass-error" class="err err-not-display">Invalid email and(or) password</div>

      <button onclick="enter()" type="submit" class="btn">Login</button>
    </div>
  </form>
    `
  } 

  var el = document.querySelector("div.bg-img");
  el.insertAdjacentHTML('afterbegin', getAuthForm());

  async function enter() { 
    let valid = true;
    let emailValid=true;
    let passwordValid=true;
    let emailEmptyError = document.getElementById("email-empty-error");
    let passwordEmptyError = document.getElementById("password-empty-error");
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");
    let passwordLoginError =  document.getElementById("login-pass-error")

    emailEmptyError.classList.add("err-not-display");
    passwordEmptyError.classList.add("err-not-display");
    emailError.classList.add("err-not-display");
    passwordError.classList.add("err-not-display");
    passwordLoginError.classList.add("err-not-display");

    const emailLoginInput = document.getElementById("enter_login");
    const passwordLoginInput = document.getElementById("enter_password");

    if(emailLoginInput.value.length === 0){
      emailEmptyError.classList.remove("err-not-display");
      valid=false;
      emailValid=false;
    }

    if(passwordLoginInput.value.length === 0){
      passwordEmptyError.classList.remove("err-not-display");
      valid=false;
      passwordValid=false;
    }

    if(emailValid==true && !emailLoginInput.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      emailError.classList.remove("err-not-display");
      valid=false;
    }

    if(passwordValid==true && passwordLoginInput.value.length < 6){
      passwordError.classList.remove("err-not-display");
      valid=false;
    }
    if(valid==false) return;
    try {
      await signInWithEmailAndPassword(
        auth,
        emailLoginInput.value,
        passwordLoginInput.value
      );
      await new Promise(onAuthStateChanged(auth, async (user) => {
        if (user) {
          console.log(user.uid)
          const uid = user.uid;
          localStorage.setItem("UID", uid);
          await User.readTickets(uid);
          setTimeout(function() {
            let link = document.getElementById('popup-area');
            link.click();
          }, 2500);
        }
      }));
      emailLoginInput.value = "";
      passwordLoginInput.value = "";
    } catch ({ message }) {
      passwordLoginError.classList.remove("err-not-display");
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (localStorage.getItem("UID") !==null) {
        window.location.href = 'index.html';
      }
    } 
  });