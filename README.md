# Instalación/Ejecutar
Este código no requiere ningun tipo de instalación previa: solo abrir `index.html` con Google Chrome.
# Componentes
## `star-rating`
Atributos: 
- `length`: Indica cuantas estrellas tendrá el componente. Default son 5.

## `product-box`
Atributos:
- `name`, `price`: texto y números respectivamente
- `image`: dirección del archivo (url o ruta local)
- `discount`: número décimal entre 1 y 0. (ejemplo, para 50% de descuento, ingresar `discount=0.5`)

Además, la componente tiene un slot extra para otro componente en su interior (html normal o custom, como `star-rating`)

## `basic-navbar`
Se trata de una barra de navegación que se sitúa en el borde superior de la pantalla.
Cuenta con un slot para recibir componentes de tipo `item-navbar` o `dropdown-navbar`.


## `dropdown-navbar`
Atributos:
- `title`: Indica el texto que tendrá en dropdown en la barra de navegación.

Cuenta con un slot para recibir componentes de tipo `item-navbar`, los cuales serán desplegados cuando se situe el mouse sobre el título del dropdown.

## `item-navbar`
Atributos:
- `title`: Indica el texto que tendrá el item en la barra de navegación.
- `link`: Indica a que link redirige el item al hacerle click.


## `g4-modal`

Esta componente tiene 3 slots, 2 de ellas con nombres/posiciones guardadas que tienen funciones específicas. El elemento que se ingrese que no tenga `slot={}`, estará en el interior del componente
- `title`: Título que tendrá el modal
- `switch`: Elemento que activará el modal