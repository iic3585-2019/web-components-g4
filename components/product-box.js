(function() {

  const template_box = document.createElement('template');

  template_box.innerHTML = `
    <style>
      .container {
        height: 200px;
        width: 150px;
        border-style: solid;
        border-width: 1px;
        margin: 2px;
        padding: 5px;
        display: inline-block;
        vertical-align:top;
        text-align: center;
      }

      img {
        height: 100px;
      }

      .price {
        font-size: 18px;
      }

      [offer] {
        font-size: 10px;
        text-decoration: line-through;
      }

      .discount {
        color: blue;
        font-size: 20px;
      }

      .name {
        font-size: 20px;
      }

      star-rating {
        vertical-align: bottom;
      }

    </style>
    <div class="container">
      <div class="discount-box"></div>
      <img>
      <div class="name"></div>
      <div class="price"></div>
      <div class="discount price"></div>
      <slot></slot>
    </div>
  `;

  class ProductBox extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template_box.content.cloneNode(true));
      this.box = this.shadowRoot.querySelector('div');
      
    }

    connectedCallback() {
      if(this.hasAttribute('name')) {
        this.name = this.getAttribute('name');
        const name = this.box.querySelector('.name');
        name.innerHTML = this.name;
      }
      if(this.hasAttribute('price')) {
        this.price = parseInt(this.getAttribute('price'));
        const price = this.box.querySelector('.price');
        price.innerHTML = '$'+this.price;
      }
      if(this.hasAttribute('discount')) {
        this.discount = parseFloat(this.getAttribute('discount'));
        const discount_price = this.box.querySelector('.discount');
        discount_price.innerHTML = '$'+this.discount * this.price;
        const price = this.box.querySelector('.price');
        price.setAttribute('offer', '');
        
      }
      if(this.hasAttribute('image')) {
        this.image= this.getAttribute('image');
        const img = this.box.querySelector('img');
        img.setAttribute('src', this.image);
        // img.setAttribute('height', 100);      
      }

      
    }


    attributeChangedCallback(name, oldValue, newValue) {
      console.log("here")
      switch(name){
        case 'name':
          this.name = newValue;
          break;
        case 'price':
          this.price = parseInt(newValue)
          break;
        case 'discount':
          this.discount = parseFloat(newValue)
          break;
      }
    }

  }

  window.customElements.define('product-box', ProductBox);
})();