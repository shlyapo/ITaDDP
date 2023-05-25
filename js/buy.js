const buy = {
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

function getTable()
{   var l = JSON.stringify(buy);
    html= ""
    localStorage.setItem("buy", l);
    s = Object.keys(buy)
    for(ss in s)
    {
        var info = Object.values(buy[s[ss]]);
        var html_sli = ""
        html_sli += "<tr> <td>"
        html_sli += info[0][0]
        html_sli += "</td><td>"
        html_sli += info[0][1]
        html_sli += "</td><td>"
        html_sli += info[2]
        html_sli += "</td><td><button class='ticket-btn' id='"
        html_sli += ss
        html_sli += "'onclick='buyTickets("
        html_sli += ss
        html_sli += ")'> Board </a></td></tr>"
        html += html_sli
    }
    return html
}

function buyTickets(id)
{   
    console.log(id);
    localStorage.setItem("buy_id", id)
    window.location.href = 'choose_seat.html';
}

var el = document.getElementById("target");
el.insertAdjacentHTML('afterbegin', getTable());



