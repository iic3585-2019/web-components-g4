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