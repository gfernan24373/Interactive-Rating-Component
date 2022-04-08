# Frontend Mentor - Interactive Rating Component with HTML, CSS and Javascript

A continuación se presenta el material informativo utilizado para resolver uno de los retos que imparte la página frontend mentor a sus usuarios.
Puedes encontrar el reto en el siguiente enlace: [Interactive Rating Component with HTML, CSS and JavaScript](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Tabla de Contenido

- [Detalles](#Detalles)
	- [El Reto](#ElReto)
	- [Visualización](#Visualización)
	- [Enlaces](#Enlaces)
- [Procedimiento](#Procedimiento)
	- [Herramientas](#Herramientas)
	- [Aprendizaje](#Aprendizaje)
	- [Mejoras]([#Mejoras])
	- [Fuentes](#Fuentes)
- [Autor](#Autor)
- [Agradecimientos](#Agradecimientos)

## Detalles

### El Reto
	
Los Usuarios deberán interactuar y disfrutar en pantalla (Desktop/Mobile) según la siguiente información:
- Ver la resolución óptima en pantalla dependiendo del dispositivo utilizado.
- Ver elementos tipo hover (cambia de estilo al ser posicionado por el cursor) con estilos llamativos e interactivos.
- Seleccionar un rango de 1 a 5 de calificación y suministrarla via el botón llamado SUBMIT.
- Poder ver la calificación a través de un mensaje Thanks you con la puntuación suministrada.

### Visualización

A continuación se muestran las capturas tomadas para interpretar la funcionalidad y diseño de los componentes creados.

Visualización en Desktop:

![Diseño componente Calificación](Design/desktop-design.jpg)
![Página de calificación](Design/desktop-preview.jpg)
![Página Thank you](Design/desktop-thank-you-state.jpg)

Visualización en Mobile (Practicamente es casi la misma):

![Diseño componente Calificación](Design/mobile-design.jpg)
![Página Thank you](Design/mobile-thank-you-state.jpg)

Visualización de elementos con propiedades Interactivas (Estados Hover):

![Componentes Interactivos](Design/active-states.jpg)

### Enlaces

[La solución reposa en el siguiente repositorio de github](https://github.com/gfernan24373/Frontend-Mentor/tree/main/Interactive%20Rating%20Component)

## Procedimientos

A continuación se muestran en este apartado los lenguajes utiliados así como algunos conceptos claves para enteder y aprender a como utilizar fundamentos en HTML, CSS y javascript.

### Herramientas

El lenguaje para el contenido de lectura en el navegador se crea mendiante HTML con etiquetas básicas como h1, p, div, span, etc. Para poder darle estilos a estos elementos se colocaron algunos atributos y clases dentro del archivo ***index.html*** Posteriormente, con CSS utilizamos las clases creadas en nuestro documento ***styles.css***  llamandolas o escribiendolas con sintaxis CSS y aplicando los estilos correspondientes que se verán en el apartado de [aprendizaje](#Aprendizaje). Finalmente se utiliza el lenguaje javascript, mejor conocido como el lenguaje de la web para poder interactuar con los elementos importantes de este reto, los cuales son los botones circulares que están enumerados del 1 al 5 y el botón SUBMIT.

*Nota: Este reto puede hacerse de muchas maneras posibles, pero para cumplir con los parámetros de Frontend Mentor, se utilizaron sólo las herramientas impartidas: HTML, CSS y Javascript.*

### Aprendizaje

***Altamente recomendable que si no entiendes el código por motivos de conocimientos te dejo la base para que puedas entender como se trabaja con cada uno de los elementos creados e implementados en los archivos index.html, styles.css y main.js. Tómate tu tiempo para digerir cada uno de estos conceptos y revisa los links en donde se presenta la documentación para entender más a fondo y comprender de manera más precisa las carácteristicas y fundamentos desarrollados.***

#### Conceptos Básicos:

##### Etiquetas:

- !DOCTYPE = especifica la versión html del documento. No es necesaria incomporarla pero es una buena práctica siempre colocarlo. De hecho todos los editores de código tienen un atajo en el teclado para cuando creas una hoja html.

- meta = contiene varios atributos que no son visibles al usuario, estos atributos a su vez contienen información elemental del sitio web que es utilizada por los motores de búsquedas como google, yahoo, bing, etc.

- link = esta etiqueta le indica al navegador donde ubicar el archivo que contiene todos los estilos, el famoso archivo con extensión .css.

- title = ¿Ves que en las pestañas de los navegadores aparecen los nombres de los sitios cuando los visitas? bueno para esto sirve esta etiqueta.

- body = practicamente es nuestra ventana del navegador, aquí estarán contenidas todas las etiquetas con la información de tu sitio web.

- div = utilizado para crear contenedores, ya que es una etiqueta de bloque vacía en la que puedes agrupar varias etiquetas de otros tipos.

- span = así como el div es una etiqueta de bloque vacía, el span es una etiqueta de línea (inline-block) donde puedes colocar elementos especificos en esa parte de tu contenido (es decir pueden estar contenidos dentro de un div o hasta de un h1).

- h1, h2...h6 = son etiquetas para identificar encabezados en el contenido de tu sitio web. Varían de tamaño siendo h1 el más grande y visible.

- p = utilizado para escribir párrafos. Si mal no recuerdo cuando usas alguna etiqueta como `<header> <section> <footer>` y escribes texto plano sin usar algún tag como h1 por ejemplo, el contenido se visualizará por defecto con esta carácteristica.

- img = una de las pocas etiquetas sin una etiqueta de cerrado, se utiliza para colocar imágenes en nuestro sitio web.

- button = cuando necesitas llenar formularios o realizar determinada acción (ir a otra pestaña, mostrar otro contenido dentro de la página, etc), los botones nos ayudarán a ejecutar acciones sencillas para darle operatividad a nuestro sitio web.

- script = este tag funciona como el link de css, sólo que llamará al archivo de javascript que contiene las funcionalidades dinámicas creadas para una mejor interacción.

##### Atributos Básicos:

- Clases de las etiquetas (class):

Cuando queremos darle ciertos estilos a nuestros elementos dentro de nuestro documento html, uno de los métodos más sencillos de interactuar con estos elementos es asignandole clases que serán apuntadas en nuestro documento css para darle los estilos necesarios y hacer del contenido de la página web más atractivo. Las clases nos ahorran colocarle estilos a los elementos 1x1 ya que varios elementos pueden contener una misma clase y tomar el estilo respectivo que le des en el archivo .css.

- Identificadores (id):

Son únicos, se utilizan al igual que las clases para dar estilos, pero su diferencia es estos sin son atributos 1x1 es decir, un elemento con un id sólo puede estar presente en ese único elemento. Así con esto podrás direfencias algunos elementos a nivel de estilo.

##### Propiedades de CSS

- @import = si quieres traer algo desde internet o desde el exterior de tu archivo css, esta propiedad puede ayudarte mucho ya que podrás colocar recursos que están creados por un tercero.

- :root = una manera de organizar tu código css es utilizando :root para agrupar o clasificar todos los estilos como por ejemplos los backgrounds, color, fuentes, etc. con :root puedes hacer que tu código sea mucho más fácil de mantener cuando tienes archivos muy extensos.

- box-sizing: border-box; = le dice al navegador tomar en cuenta para cualquier valor que se especifique de borde o de relleno para el ancho o alto de un elemento. Es decir, si se define un elemento con un ancho de 100 pixeles. Esos 100 pixeles incluíran cualquier borde o relleno que se añadan, y la caja de contenido se encogerá para absorber ese ancho extra. Esto típicamente hace mucho más fácil dimensionar elementos. ***content-box es el comportamiento CSS por defecto para el tamaño de la caja (box-sizing). Si se define el ancho de un elemento en 100 pixeles, la caja del contenido del elemento tendrá 100 pixeles de ancho, y el ancho de cualquier borde o relleno ser añadirá al ancho final desplegado.***
[Información completa.](https://developer.mozilla.org/es/docs/Web/CSS/box-sizing)

- display: flex; = La propiedad CSS flex es una propiedad resumida que indica la capacidad de un elemento flexible para alterar sus dimensiones y llenar el espacio disponible. Los elementos flexibles pueden ser estirados para utilizar el espacio disponible proporcional a su factor de crecimiento flexible o su factor de contracción flexible para evitar desbordamiento.
[Información completa.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- width y height = si quieres colocarle un ancho (width) y un alto (height) a cualquier elemento, utiliza estas propiedades con unidades como px, %, em, rem, vw, vh.

- background y color = si quieres colocarle un color o una imagen al fondo de un elemento, utiliza background y utiliza color para darle color a tus textos. [Investiga a través de este enlace los distintos métodos que existen para darle color tu sitio web.](https://developer.mozilla.org/es/docs/Web/CSS/color_value)

- border y border-radius = cuando quieras agregar bordes puedes hacerlo con este atajo `border: 3px solid blue` en donde: 3px es el grosor, solid es el tipo de borde (en este caso solid significa una línea recta ininterrumpida) y blue el color. Con border-radius literalmente puedes hacer que tus bordes sean menos cuadrados. Por ejemplo un valor de asignación igual a 100% hará que tus bordes se vean totalmente redondos.

- margin y padding = fácilmente con estas propiedades puedes especificar que tan alejados quieres que se encuentren los elementos desde el exterior o desde el interior. Si le asignas un margin a un elemento entonces estarás indicando que tan lejos quieres que se encuentre ese elemento en relación a los elementos a nivel exterior, mientras que si le indicas un padding estarás refiriendote a la distancia interna que se encuentra entre los elementos de adentro.

- transform = te permite modificar el espacio de coordenadas del modelo de formato visual CSS. Usándola, los elementos pueden ser trasladados, rotados, escalados o sesgados de acuerdo a los valores establecidos.
[Informate aquí sobre esta propiedad.](https://developer.mozilla.org/es/docs/Web/CSS/transform)

##### Pseudo clases en CSS

- :hover = puedes hacer que cuando el mouse se posicione en un elemento, active un estado diferente al que se encuentra, por ejemplo puedes decir que cambie la apariencia de un background que se encuentra en negro, y al posicionar el cursor cambie de color a rojo.

- :active = representa un elemento (como un botón) que el usuario está activando.  Cuando se usa un mouse, la "activación" generalmente comienza cuando el usuario presiona el botón primario del mouse y termina cuando se suelta.

[Informacion de pseudo elementos aquí.](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes)

#### Entendiendo el código del reto.

Describiremos brevemente siendo no tan detallistas en esta ocasión la forma en la que fue escrita el código sólo en los puntos de interés en los cuales nos llevó más tiempo adaptar por motivos de conocimientos y destrezas actuales.

- Crear contenedores: para poder adaptar el contenido a mostrar en el reto, se procedió a crear 3 contenedores:
	- main-container: contendrá dentro de él los contenedores `container-start container-thanks` con 6 propiedades fundamentales para centrar horizontal y verticalmente  con flex cada contenedor. Destacando que el contenedor `container-thanks` no será visible hasta que el botón submit sea seleccionado.
	```css
	.main-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
	}
	```
	- container-start  y container-thanks = ambos casi parecidos, con una diferencia en la propiedad del flex para ajustarse a las características solicitadas en el reto. La propiedad gap se usa para añadirle una distancia prudente a cada elemento dentro del contenedor tanto horizontal como verticalmente.
	```css
	.container-start {
		display: flex;
		flex-direction: column;
		justify-content: start;
		width: 25rem;
		border-radius: 1.5rem;
		background: var(--container);
		padding: 1.8rem;
		gap: 1.5rem;
	}
	.container-thanks {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 25rem;
		background: var(--container);
		border-radius: 1.5rem;
		padding: 2.2rem;
		gap: 1.5rem;
	}
```
	- container-circulos = contiene los botones que el usuario elegirá para realizar la calificación, esencial para organizarlos de manera uniforme, si este contenedor es muy difícil ajustar los elementos de la manera como lo requiere el reto. El gap es super importante en este contenedor pues le dará la distancia de manera uniforme a cada botón entre sí.

	- circulo = esta clase es muy importante, le dará la uniformidad a los botones estableciendo un width y height con un flex para centrar los números en el medio del botón. 
	```css
	.circulo {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 3rem;
		border-radius: 100%;
		border: none;
		color: var(--MediumGrey);
		background: var(--DarkBlue);
		padding: 0.7rem;
	}
	```
	- Pseudo clases .circulo:hover, .btn:hover y .btn:active = la primera  y segunda se usa para darle el fondo gris a los botones que contienen los números del 1 al 5 (en el caso de circulo) y colocar el fondo en blanco en el botón SUBMIT cuando el ratón se posiciona en cualquiera de ellos. La tercera para darle esa sensación de hundirse  y liberación al botón SUBMIT al ser presionado y soltado.
	```css
	.circulo:hover {
		background: var(--LightGrey);
		color: var(--White);
		cursor: pointer;
	}
	.btn:hover {
		background: var(--White);
		color: var(--primary);
	}
	.btn:active {
		transform: scale(0.98);
	}
	```
- Javascript = esta es la parte que más nos dió dolor de cabeza, nos tomó un día entero buscar la forma de que los elementos recorridos en el DOM ejecutaran las acciones que queriamos que hicieran en determinado momento. Para esto, se utilizaron 2 manejadores de eventos.
	- DOM: para manipular los elementos utilizamos y declaramos las siguientes variables:
	```js
	let circulos = document.querySelectorAll('.circulo'); //QuerySelectorAll: returing a Nodelist (array-like objects)
	let btn = document.querySelector('.btn');
	let container1 = document.querySelector('.container-start');
	let container2 = document.querySelector('.container-thanks');
	```
	Si quieres saber más sobre este tema, [comienza aquí](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
	
	- Primer bucle de iteración = una vez declarada todas las variables, el programa inicia con un bucle para iterar sobre los circulos es decir sobre cada botón. ***¡¡¡IMPORTANTE!!!*** Dado que este es un reto de iniciación, nuestros conocimientos sobre javascript son básicos, por lo que mediante la construcción de este código en particular, nos dimos cuenta que al generar un `console.log(i.style.background);` nos encontrabamos con un elemento sin esta propiedad