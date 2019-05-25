# Instalación/Ejecutar
Este código no requiere ningun tipo de instalación previa: solo abrir `index.html` con Google Chrome.

También puede verse online (gracias a GitHub Pages) en el siguiente enlace: https://iic3585-2019.github.io/web-components-g4/index.html
# Componentes
## `star-rating`
Atributos: 
- `length`: Indica cuantas estrellas tendrá el componente. Si no se indica, por default son 5.
Ej:

```
  <star-rating length=7></star-rating>
```

## `product-box`
Atributos:
- `name`, `price`: texto y números respectivamente
- `image`: dirección del archivo (url o ruta local)
- `discount`: número décimal entre 1 y 0. (ejemplo, para 50% de descuento, ingresar `discount=0.5`).  Opcional.

Ej:
```
  <product-box
    name="TV"
    price=799990
    discount=0.1>
  </product-box>
```

Además, la componente tiene un slot extra para otro componente en su interior (html normal o custom, como `star-rating`)

```
  <product-box
    name="Pack Switch"
    price=550000
    discount=0.7 image="https://media.wired.com/photos/5a94bb6e3ff74b54f27bac01/master/pass/03-Orzly-Nintendo-Switch-Carrying-Case-SOURCE-Amazon.jpg">
      <star-rating></star-rating>
  </product-box> 
```

## `item-navbar`
Componente para un enlace en la barra de navegación o dropdown. Cambia de color al pasar el mouse por encima.
Atributos:
- `title`: Indica el texto que tendrá el item en la barra de navegación.
- `link`: Indica a que link redirige el item al hacerle click.

```
  <item-navbar title="Home" link="./index.html"></item-navbar>
```

## `dropdown-navbar`
Componente de tipo menú desplegable, para usar en la barra de navegación.
Atributos:
- `title`: Indica el texto que tendrá en dropdown en la barra de navegación.

Cuenta con un slot para recibir componentes de tipo `item-navbar`, los cuales serán desplegados cuando se situe el mouse sobre el título del dropdown.

```
  <dropdown-navbar title="Celulares">
    <item-navbar title="iPhone" link="./iphone.html"></item-navbar>
    <item-navbar title="Smartphone" link="./smartphone.html"></item-navbar>
  </dropdown-navbar>
```

## `basic-navbar`
Se trata de una barra de navegación que se sitúa en el borde superior de la pantalla. Cuenta con un slot para recibir dropdowns o items.

```
  <basic-navbar>
    <item-navbar title="Home" link="./index.html"></item-navbar>
    <dropdown-navbar title="Consolas">
      <item-navbar title="Switch" link="./switch.html"></item-navbar>
    </dropdown-navbar>
  </basic-navbar> 
```

## `almazon-navbar`
Se trata de una barra de navegación customizada que se sitúa en el borde superior de la pantalla. Cuenta con items y dropdowns hardcodeados, para ser utilizada directamente en las páginas de Almazon.

```
  <almazon-navbar></almazon-navbar>
```

## `g4-modal`

Esta componente tiene 3 slots, 2 de ellas con nombres/posiciones guardadas que tienen funciones específicas. El elemento que se ingrese que no tenga `slot={}`, estará en el interior del componente
- `title`: Título que tendrá el modal
- `switch`: Elemento que activará el modal

Ej: 
```
  <g4-modal>
    <h1 slot="title">Mi título</h1>
    <button slot="switch">Abrir</button>
    <p>Mi contenido</p>
  </g4-modal>
```
