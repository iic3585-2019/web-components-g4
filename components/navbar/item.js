class Item extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
    <style>
    a {
      float: left;
      font-size: 16px;
      color: white;
      text-align: center;
      padding: 14px 20px;
      text-decoration: none;
      background-color: black;
    }
      

      a:hover {
        background-color: red;
      }
    </style>
    
    <a href="#"></a>
    `;
  }

  connectedCallback() {
    const item = this.shadowRoot.querySelector("a");
    const link = this.getAttribute("link");
    const title = this.getAttribute("title");
    item.innerHTML = title;
    item.setAttribute("href", link);
  }
}

customElements.define("item-navbar", Item);
