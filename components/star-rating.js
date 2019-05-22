(function() {

  const template_star = document.createElement('template');

  template_star.innerHTML = `
    <style>
      span {
        cursor: pointer;
        font-size: 30px;
        color: #ffcc00;
        font-family: monospace;
      }
    </style>
    <span>☆</span>
  `;

  class StarIcon extends HTMLElement {
    constructor() {
      super();

      this.checked = false;

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template_star.content.cloneNode(true));
      this.star = this.shadowRoot.querySelector('span')
      this.addEventListener('click', this._click.bind(this));
      // this.star.addEventListener('changeState', this._changeState.bind(this));
    }

    _changeState(){
      if(this.hasAttribute('checked')) {
        this.star.innerHTML = '★';
        this.checked = true;
      }
      else {
        this.star.innerHTML = '☆';
        this.checked = false;
      }
    }

    _click(){
      if(!this.checked) {
        this.checked = true;
      }
      
      this.dispatchEvent(new CustomEvent('select', 
      { detail: {
          index: this.index,
          state: this.checked,
        }
      }));
    }

    static get observedAttributes() {
      return ['index', 'checked'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      switch(name){
        case 'index':
          this.index = parseInt(newValue);
          break;
        case 'checked':
          this._changeState();
          break;
      }
    }
    
  }


  template_rating = document.createElement('template');
  template_rating.innerHTML = `
    <span>
    </span>
    
    <style>
      span {
        user-select: none;
      }
    </style>
  `;

  class StarRating extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template_rating.content.cloneNode(true));
      this.container = this.shadowRoot.querySelector('span');
      this.stars = [];
      this.rating = 0;
      
    }

    connectedCallback(){
      this.length = 5;
      if(this.hasAttribute("length")){
        this.length = this.getAttribute("length")
      } else{
        this.setAttribute("length", 5)
      }
      if(!this.hasAttribute("value")){
        this.setAttribute("value", 0);
      }
      for (let i = 0; i < this.length; i++) {
        const starItem = document.createElement('star-icon');
        starItem.setAttribute('index', i)
        starItem.addEventListener('select', this.renderSelection.bind(this));
        this.container.appendChild(starItem);
        this.stars.push(starItem);
      }
    }

    renderSelection(event){
      const index = event.detail.index;
      const state = event.detail.state;
      this.rating = index+1;
      this.setAttribute("value", this.rating);
      if(state) {
        for (let i = 0; i < this.length; i++) {
          if(i <= index ) {
            this.stars[i].setAttribute('checked', '');
          }
          else {
            this.stars[i].removeAttribute('checked');
          }
        }
      }
      
    }
  }

  window.customElements.define('star-icon', StarIcon);
  window.customElements.define('star-rating', StarRating);
})();