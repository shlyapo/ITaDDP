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

function getTickets()
{   
    var buy_id = JSON.stringify(localStorage.getItem("buy_id"));
    var seast_num = JSON.stringify(localStorage.getItem("num_seat"));
    buy_id = JSON.parse(buy_id);
    seast_num = JSON.parse(seast_num)
    console.log(seast_num)
    var s = Object.keys(buy)
    for(ss in s)
    {   
        if(ss==buy_id)
        {
            var info = Object.values(buy[s[ss]]);
            html= "<p align='center' style='color:#f78b10a2; font-size:30px'>"
            html += "Выбрано место: "
            html += seast_num
            html += "<br>Поезд:"
            for(d in info[0])
            {
                html+="<br>" + info[0][d]
            }
            html+="<br>" + info[2]
            html += "</p>"
            console.log(info)
            return html
        }
    }
    
    
}

var el = document.getElementById("ss");
el.insertAdjacentHTML('beforeend', getTickets());