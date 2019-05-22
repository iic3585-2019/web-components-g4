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
    <slot></slot>
    </div>
      `;
  
    class Navbar extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
      }
    }
  
    window.customElements.define("basic-navbar", Navbar);
  })();