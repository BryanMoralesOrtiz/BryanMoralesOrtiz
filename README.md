# Convertidor de Divisas 

Este es un convertidor de divisas que te permite convertir entre diferentes monedas de forma rápida y sencilla. La aplicación utiliza la API de ExchangeRate-API para obtener las tasas de cambio más recientes.

## Características

- Convierte entre múltiples divisas
- Interfaz de usuario interactiva y atractiva
- Validación de formularios
- **Manipulación del DOM:**
  - Actualización dinámica del contenido de la página web en respuesta a las interacciones del usuario.
  - Mostrado de resultados de conversión en tiempo real.
- Animaciones simples para mostrar los resultados

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:
conversor-divisas/
│
├── index.html
├── styles.css
├── script.js
├── README.md
└── .env
- `index.html`: Este archivo contiene la estructura del sitio web y los elementos del formulario de conversión.
- `styles.css`: Este archivo contiene los estilos CSS para dar formato y diseño a la página web.
- `script.js`: Este archivo contiene el código JavaScript que maneja la lógica de la aplicación, incluida la manipulación del DOM y la interacción con la API de ExchangeRate-API.
- `README.md`: Este archivo es la documentación del proyecto que estás leyendo actualmente.
- `.env`: Este archivo es opcional y se utiliza para almacenar la clave de API de ExchangeRate-API de forma segura.


## Ejecución

1. Abre el archivo `index.html` en tu navegador web.

2. Ingresa la cantidad que deseas convertir en el campo "Cantidad".

3. Selecciona la moneda de origen en el campo "De:" y la moneda de destino en el campo "A:".

4. Haz clic en el botón "Convertir" para obtener el resultado de la conversión.

## Funcionamiento del Código

### `index.html`

Este archivo contiene la estructura HTML del sitio web, incluyendo los elementos del formulario de conversión y el contenedor para mostrar los resultados.

### `styles.css`

Este archivo contiene los estilos CSS que dan formato y diseño a la página web, incluyendo la apariencia de los elementos del formulario y el resultado de la conversión.

### `script.js`

Este archivo contiene el código JavaScript que maneja la lógica de la aplicación. Las principales funciones son:

- `convertCurrency(amount, fromCurrency, toCurrency)`: Esta función realiza una solicitud a la API de ExchangeRate-API para obtener las tasas de cambio y realiza la conversión de divisas.
- Manejadores de eventos: El código incluye manejadores de eventos para el envío del formulario y para ocultar el resultado cuando se modifica alguno de los campos de entrada.

## Autor

[Morales Ortiz Jesus Bryan]
[Beltran Ramirez Damian Alejandro]
[Sanchez Garcia Lorena Elizabeth]
