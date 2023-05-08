class ItemBoard extends HTMLElement {
    constructor() {
        super();
        fetch('https://mytrain-34919-default-rtdb.firebaseio.com/board.json', {
      method: 'GET',
      body: JSON.stringify(ticket),
      headers: {
        'Content-Type': 'apllication/json'
      }
    })
    .then(response => response.json())
    .then(response=>
      {
        console.log(response)
      })
    }

    static create(ticket)
  {
    
  }
        connectedCallback() {
            this.style.color = "red";
            if (this.hasAttribute("hellocolor")) {
                this.style.color = this.getAttribute("hellocolor");
            }
        }
}

customElements.define("item-board", ItemBoard);