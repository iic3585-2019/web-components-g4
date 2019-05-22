(function() {
  const template = document.createElement("template");

  template.innerHTML = `
    <style>
    .dropdown {
    float: left;
    background-color: black;
    }
    
    .title {
    font-size: 16px;  
    color: white;
    padding: 14px 16px;
    }
    
    .dropdown:hover {
    background-color: gray;
    cursor: pointer;
    }
    
    .dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    }
    
    .dropdown:hover .dropdown-content {
    display: grid;
    }

    ::slotted(item-navbar) {
        background-color: black;
    }

    ::slotted(item-navbar:hover) {
        background-color: red;
    }
    </style>
    
    <div class="dropdown">
        <div class="title"></div>
        <div class="dropdown-content">
            <slot></slot>
        </div>
    </div>
    `;

  class Dropdown extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      const dropdown = this.shadowRoot.querySelector(".title");
      const title = this.getAttribute("title");
      dropdown.innerHTML = title;
    }
  }

  customElements.define("dropdown-navbar", Dropdown);
})();
