(function() {
  const template = document.createElement("template");

  template.innerHTML = `
  <style>
    .nav {
      background-color: black;
    overflow: hidden;
    margin: -8px;
    font-family: Lato,sans-serif;
    }
    </style>

  <div class="nav">
  <item-navbar title="Home" link="./index.html"></item-navbar>
  <dropdown-navbar title="Celulares">
    <item-navbar title="iPhone" link="./iphone.html"></item-navbar>
    <item-navbar title="Smartphone" link="./smartphone.html"></item-navbar>
  </dropdown-navbar>
  <dropdown-navbar title="Consolas">
    <item-navbar title="Switch" link="./switch.html"></item-navbar>
  </dropdown-navbar>
  </div>
    `;

  class Navbar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  window.customElements.define("almazon-navbar", Navbar);
})();