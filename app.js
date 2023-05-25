import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import firebaseConfig from './firebase.js';
import {User} from './user.js'
import {Board} from './js/board.js'

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
       
window.enter = async function() {
  var uid;
  await new Promise(onAuthStateChanged(auth,async (user) => {
    if (user) {
      console.log(user.uid)
      uid = user.uid;
      console.log(typeof(uid))
      localStorage.setItem("UID", JSON.stringify(uid));
      await User.readTicketsFromDB(uid);
    }
  }));
  await User.readTicketsFromDB(uid);
  }

window.board = async function() {
  debugger
        await Board.readBoardFromDB();
}

