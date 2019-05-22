(function() {
    const template = document.createElement("template");
  
    template.innerHTML = `
    <script src="./dropdown.js"></script>
    <script src="./item.js"></script>
    <script src="./navbar.js"></script>
    <basic-navbar>
    <dropdown-navbar title="Celulares">
        <item-navbar title="iPhone" link="./iphone.html"></item-navbar>
        <item-navbar title="Smartphone" link="./smartphone.html"></item-navbar>
      </dropdown-navbar>
    <dropdown-navbar title="Consolas">
      <item-navbar title="Switch" link="./switch"></item-navbar>
    </dropdown-navbar>
    <item-navbar title="Notebooks" link="./notebooks"></item-navbar>
    
  </basic-navbar>
      `;
  
    class Navbar extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
      }
    }
  
    customElements.define("my-navbar", Navbar);
  })();