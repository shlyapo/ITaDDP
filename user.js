import { getDatabase, ref, onValue, set, remove } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

export class User {
  static async create(user) {
    const response = await fetch(
      "https://mytrain-34919-default-rtdb.firebaseio.com/users.json",
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


  static async readTicketsFromDB(uid) {
    fetch(`https://mytrain-34919-default-rtdb.firebaseio.com/users/wZL9yxB1y2QzCNNBCbNfw08ty3c2/tickets.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
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
