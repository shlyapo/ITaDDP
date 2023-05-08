export class Ticket {

  static create(ticket) {
    return fetch('https://podcast-app-15663.firebaseio.com/questions.json', {
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        ticket.id = response.name
        return ticket
      })
      .then(addToLocalStorage)
      .then(Ticket.renderList)
  }

  static fetch(token) {
    if (!token) {
      return Promise.resolve('<p class="error">У вас нет токена</p>')
    }
    return fetch(`https://mytrain-34919-default-rtdb.firebaseio.com/tickets.json?auth=${token}`)
      .then(response => response.json())
      .then(response => {
        if (response && response.error) {
          return `<p class="error">${response.error}</p>`
        }

        return response ? Object.keys(response).map(key => ({
          ...response[key],
          id: key
        })) : []
      })
  }

  static renderList() {
    const questions = getQuestionsFromLocalStorage()

    const html = questions.length
      ? questions.map(toCard).join('')
      : `<div class="mui--text-headline">Вы пока ничего не спрашивали</div>`

    const list = document.getElementById('ticket')

    list.innerHTML = html
  }

  static listToHTML(questions) {
    return questions.length
      ? `<ol>${questions.map(q => `<li>${q.text}</li>`).join('')}</ol>`
      : '<p>Вопросов пока нет</p>'
  }
}
customElements.define("ticket", Ticket);
function foo(el) {
  el.parentElement.parentElement.remove();
}
    


function addToLocalStorage(question) {
const all = getQuestionsFromLocalStorage()
all.push(question)
localStorage.setItem('tickets', JSON.stringify('tickets'))
}

function getQuestionsFromLocalStorage() {
return JSON.parse(localStorage.getItem('tickets') || '[]')
}

function toCard(ticket) {
return `
  <ticket>
    <a>    ${new URL(ticket).toLocaleDateString()} </a>
    <div class="delete" onclick="foo(this)">Удалить</div>
  </div>
  <br>
`
}  

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
      var btnContainer = document.getElementById("myBtnContainer");
      var btns = btnContainer.getElementsByClassName("btn");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }
  