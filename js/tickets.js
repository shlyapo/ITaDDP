const tickets = {
  "oj5isoCD2zPh0cVUVCgiVnam7n13":{
  "-2": "./src/images/ticket_with_registration-1.pdf",
  "-1": "./src/images/ticket_with_registration-1.pdf",
  "0": "./src/images/ticket_with_registration-1.pdf",
  "1": "./src/images/ticket_with_registration-1.pdf",
  "2": "./src/images/ticket_with_registration-1.pdf"
},
"wZL9yxB1y2QzCNNBCbNfw08ty3c2":
{
  "-2": "./src/images/ticket_with_registration-1.pdf",
  "1": "./src/images/ticket_with_registration-1.pdf",
  "2": "./src/images/ticket_with_registration-1.pdf"
},
};

function listTicket(user_id)
  { html= ""
  console.log(user_id)
  var l = JSON.stringify(tickets);
  var ke = JSON.parse(l);
  var l = Object.keys(ke)
   var key;
   var newStr = user_id.replace(/"/g, '');
    for(key in l)
    {
      if(newStr == l[key])
      {
        var s = ke[newStr]
        var ss = Object.keys(s)
        for(sr in ss)
        {
        console.log(sr)
      html_sli = "<div class='filterDiv"
      if(ss[sr] < 0)
      {
        html_sli += " fal'>"
      }
      else {
          html_sli += " tr'>"
      }
      html_sli += "<embed src='"
      html_sli += s[ss[sr]]
      html_sli += "' width=100% height=100% /> </div>"
      html += html_sli
    }
    }
  }

    return html
  }

var us_id = localStorage.getItem("UID") 
var el = document.getElementById("conn");
el.insertAdjacentHTML('afterbegin', listTicket(us_id));  

filterSelection("all")
      function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
          w3RemoveClass(x[i], "show");
          if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
      }
      
      function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
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
  