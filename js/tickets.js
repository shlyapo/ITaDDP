const tickets = {
  "-2": "/src/images/ticket_with_registration-1.pdf",
  "-1": "/src/images/ticket_with_registration-1.pdf",
  "0": "/src/images/ticket_with_registration-1.pdf",
  "1": "/src/images/ticket_with_registration-1.pdf",
  "2": "/src/images/ticket_with_registration-1.pdf"
};

function listTicket()
  { html= ""

  var ke = JSON.parse(JSON.stringify(tickets));
   let keys = Object.keys(tickets);
   var key;
   
    for(key in keys)
    {
      html_sli = "<div class='filterDiv"
      let c = Number(keys[key])
      if(c < 0)
      {
        html_sli += " fal'>"
      }
      else {
          html_sli += " tr'>"
      }
      html_sli += "<embed src='"
      html_sli += ke[keys[key]]
      html_sli += "' width=100% height=100% /> </div>"
      html += html_sli
    }

    return html
  }

var el = document.getElementById("conn");
el.insertAdjacentHTML('afterbegin', listTicket());  

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
  