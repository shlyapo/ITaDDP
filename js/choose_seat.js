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

function getTickets()
{   
    var id = JSON.stringify(localStorage.getItem("buy_id"));
    id = JSON.parse(id);
    console.log(id)
    html= ""
    var s = Object.keys(b)
    for(ss in s)
    {   
        if(ss==id)
        {
            var info = Object.values(b[s[ss]]);
            for(step = 0; step < 44; step++)
            {   
                console.log(info[1])
                if(step==0)
                {
                    html+="<div class='grid-init grid'>"
                }
                if(step==10)
                {
                    console.log(info[1][step])
                }
                if(info[1].indexOf(step+1)!=-1)
                {   
                    html+="<button class='box-init tr' onclick='buy("
                    html+=info[1][info[1].indexOf(step+1)]
                    html+=")' style='background-color: #c67e128f''>"
                    html+=info[1][info[1].indexOf(step+1)]
                    html+="</button>"
                }
                else
                {
                    html+="<button class='box-init fal' style='background-color: #ddd'>"
                    html+=step+1
                    html+="</button>"
                }
                if(step==43)
                {
                    html+="</div>"
                    return html
                }
                if((step+1)%4==0&&step!=0)
                {
                    html+="</div><div class='grid-init grid'>"
                }
                
            }
        }
    }
}

var el = document.getElementById("ss");
el.insertAdjacentHTML('beforeend', getTickets());

function buy(num)
{
  localStorage.setItem("num_seat", num)
  window.location.href = 'seat_buy.html';
}
filterSelection("all")
      function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("box-init");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
          w3RemoveClass(x[i], "show");
          if (x[i].className.indexOf(c) < 0) w3AddClass(x[i], "show");
        }
      }
      
      function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];
        console.log(element)}
        }
      }
      
      function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
          }
        }
        element.className = arr1.join(" ");
      }
      
      // Add active class to the current button (highlight it)
      var btnContainer = document.getElementById("myBtnContainer grid");
      var btns = btnContainer.getElementsByClassName("btn");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }