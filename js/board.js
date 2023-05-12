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


  static async readBoardFromDB() {
    let tickets = [];
    try {
      const db = getDatabase();
      const ticketsRef = ref(db, `board`);
      onValue(ticketsRef, (ticketsSnap) => {
        ticketsSnap.forEach((ticketsChild) => {
          console.log(ticketsRef)
          console.log(ticketsSnap)
          let ticket = ticketsChild
          tickets.push(ticket);
        });
        console.log(tickets);
        localStorage.setItem("board", JSON.stringify(tickets));
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
