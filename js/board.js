import { getDatabase, ref, onValue, set, remove } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

export class Board {
  static async create(user) {
    const response = await fetch(
      "https://mytrain-34919-default-rtdb.firebaseio.com/board.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  static async addTicket(ticket, uid) {
    const response = await fetch(
      `https://mytrain-34919-default-rtdb.firebaseio.com/users/${uid}/tickets.json`,
      {
        method: "POST",
        body: JSON.stringify(ticket),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(()=>{
      let tickets = JSON.parse(localStorage.getItem("tickets"));
      tickets.push(ticket)
      localStorage.setItem("tickets", JSON.stringify(tickets));
    })
    console.log(response)
  }


  static async readBoardFromDB(id) {
    let tickets = [];
    try {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${id}/tickets`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
    } catch (e) {
      alert(e);
    }
  }

  static async deleteTicketsFromDB(uid) {
    let themes = [];
    try {
      const db = getDatabase();
      const themesRef = ref(db, `users/${uid}/themes`);
      onValue(themesRef, (themesSnap) => {
        themesSnap.forEach((themesChild) => {
          let theme = themesChild.val();
          theme.id = themesChild.key;
          themes.push(theme);
        });
        console.log(themes);
        localStorage.setItem("themes", JSON.stringify(themes));
      });
    } catch (e) {
      alert(e);
    }
  }
}
