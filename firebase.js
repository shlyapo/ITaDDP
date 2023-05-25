const firebaseConfig = {

  apiKey: "AIzaSyDlF52jpOlkDLMLNuCpMTCGZtd4V1nTtTY",

  authDomain: "mytrain-34919.firebaseapp.com",

  databaseURL: "https://mytrain-34919-default-rtdb.firebaseio.com",

  projectId: "mytrain-34919",

  storageBucket: "mytrain-34919.appspot.com",

  messagingSenderId: "557682534482",

  appId: "1:557682534482:web:8983330ed1550df115178b",

    "rules": {
      ".read": "now < 1685653200000",  // 2023-6-2
      ".write": "now < 1685653200000",  // 2023-6-2
    }

};


export default firebaseConfig;


