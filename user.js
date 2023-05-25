import { getDatabase, get, ref, child, onValue, set, remove } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

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


  static async readTicketsFromDB(id) {
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
    localStorage.setItem("ticket", tickets);
    const b = {
      "0":{
          city: ["Moscow", "Minsk"],
          seats: [2,3,6,10,19,25,32, 33, 36,40,41,44],
          time: "15.06.2023"
      },
      "1":{
          city: ["Grodno", "Minsk"],
          seats: [1,2,3,11,16,28,31, 33, 34,40,41,42],
          time: "15.06.2023"
      },
      "2":{
          city: ["Gomel", "Lepel"],
          seats: [2,3,4,11,18,23,28, 32, 35,41,42,43],
          time: "15.06.2023"
      },
      "3":{
          city: ["Polotsk", "Minsk"],
          seats: [2,3,6,10,19,25,32, 33, 36,40,41,44],
          time: "15.06.2023"
      },
      "4":{
          city: ["Mogilev", "Minsk"],
          seats: [2,3,6,10,19,25,32, 33, 36,40,41,44],
          time: "15.06.2023"
      },
      "5":{
          city: ["Minsk", "Brest"],
          seats: [2,3,6,10,19,25,32, 33, 36,40,41,44],
          time: "15.06.2023"
  
      },
      "6":{
          city: ["Mosyr", "Minsk"],
          seats: [2,3,6,10,19,25,32, 33, 36,40,41,44],
          time: "15.06.2023"
      },
      "7":{
          city: ["Pinsk", "Minsk"],
          seats: [2,3,6,10,19,25,32, 33, 36,40,41,44],
          time: "15.06.2023"
      }
    };
    localStorage.setItem("buy", b);
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
