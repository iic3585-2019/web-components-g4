(function() {

  const template_box = document.createElement('template');

  template_box.innerHTML = `
    <style>
      .container {
        height: 200px;
        width: 150px;
        border-style: solid;
        border-width: 1px;
        border-radius: 6px;
        -webkit-box-shadow: -4px 4px 5px 0px rgba(0,0,0,0.75);
        margin: 3px 2px;
        padding: 5px;
        display: inline-block;
        vertical-align: top;
        text-align: center;
        font-family: Lato,sans-serif;
        position: relative;
      }

      img {
        height: 100px;
        margin: 5px 0px;
      }

      .price {
        font-size: 18px;
        margin: 0px 0px 2px;
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

      .star {
        position: absolute;
        bottom: 2;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
      }

      .discount-box:not(:empty) {
        position: absolute;
        top: 5px;
        right: 5px;
        background: blue;
        color: white;
        font-weight: bold;
        z-index: 5;
        padding: 2px 3px;
        border-radius: 7px;
      }

    </style>
    <div class="container">
      <div class="discount-box"></div>
      <img src="https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available.jpg">
      
      <div class="name">--</div>
      <div class="price"></div>
      <div class="discount price"></div>
      <div class="star">
        <slot></slot>
      </div>
    </div>
  `;

  class ProductBox extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template_box.content.cloneNode(true));
      this.box = this.shadowRoot.querySelector('div');
      
    }

    _to_price(val){
      const formatter = new Intl.NumberFormat('CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
      })
      return formatter.format(val)
    }

    set name(val){
      const obj = this.box.querySelector('.name');
      obj.innerHTML = val;
    }

    set price(val){
      this._price = parseInt(val);
      const obj = this.box.querySelector('.price');
      obj.innerHTML = this._to_price(val);
    }

    get price(){
      return this._price;
    }


    set discount(val){
      this._discount = parseFloat(val);
      const discount_price = this.box.querySelector('.discount');
      discount_price.innerHTML = this._to_price((1 - val)* this.price);

      const objPrice = this.box.querySelector('.price');
      objPrice.setAttribute('offer', '');

      const objDiscount = this.box.querySelector('.discount-box');
      objDiscount.innerHTML = this.discount*100 + '%';
    }

    get discount(){
      return this._discount
    }

    set image(src){
      const img = this.box.querySelector('img');
      img.setAttribute('src', src);
    }

    get image(){
      return this.box.getAttribute('image');
    }

    static get observedAttributes() {
      return ['name', 'image', 'discount', 'price'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      switch(name){
          case 'name':
            this.name = newValue;
            break;
          case 'image':
            this.image = newValue;
            break;
          case 'price':
            this.price = newValue;
            break;
          case 'discount':
            this.discount = newValue
      }
    }

  }

  window.customElements.define('product-box', ProductBox);
})();