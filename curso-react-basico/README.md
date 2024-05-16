# Repositorio base del Curso de Introducción a React.js en Platzi

¡Hola!

En este repositorio encontrarás el código de todas las clases del [Curso de Introducción a React.js](https://platzi.com/reactjs). Para empezar solo debes clonar este repositorio (`git clone`), instalar sus dependencias (`npm i`) y ejecutar la aplicación (`npm start`).

La rama principal contiene el código con el que eempezamos el curso. En las demás ramas encontrarás el código de las siguientes clases y finalmente el deploy de la aplicación.

¡Mucha suerte aprendiendo React! #NuncaParesDeAprender

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
<br>

## Notas

### Elementos del Proyecto
#### Readme
Nos da información basica del proyecto, datos tecnicos, librerias configuración

#### Package.json
Nos muestra dependencias, scripts (funciones a ejecutar), configuraciones (eslint es una libreria que nos ayuda a corregir errores de sintaxis o escritura de codigo), browserlist (ayuda a transpilar el proyecto como servidor :3000).

#### .gitignore
Configuración de git para limitar archivos y carpetas a ser subidos al repositorio.

#### Carpeta public
Carpeta que contiene elementos publicos que seran accedidos por el navegador. El dato esencial de React es que utiliza una plantilla base de HTML (index.html) con una etiqueta div dentro de body, esta etiqueta div tiene id=root (por lo general) y a travez de esta es que renderizamos todo el proyecto en react.

Adicionalmente el HEAD del archivo index.html tenemos estilos y el manifest que es el que nos ayudará a hacer pwa (paginas instalables en ordenadores incluso offline).

#### Carpeta src
El archivo principal es index.js donde importamos todos los estilos y exportamos un componente App.js. Dentro de App.js importamos los estilos asignados al componente App.css luego encontramos una función con nombre iniciado con mayuscula por convención que puede o no recibir un parametro, dentro del return podemos ejecutar codigo jsx bajo la nomenclatura de react.

Adicionalmente podemos crear carpetas con una arquitectura con buenas practicas (hooks, services, api, etc.).

#### Creamos un componente
Dentro de App antes del export:

```js
function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Llorar con la Lorona</p>
      <span>X</span>
    </li>
  );
}
```
Y en el componente App, luego del primer className:

```js
<TodoItem />
```
Luego de verificar la aplicación en el navegador, podemos aclarar que bajo un metood render (root.render([<TodoCount />])) podemos renderizar cuantas veces querramos componentes y utilizando props (propiedades) esta se utilizan como propiedades HTML:

```js
<TodoCount completed={3} total={5} />
```
Diferencia de componente y elemento
La funcion que empieza con mayuscula es un componente que reciben propiedades y no renderizan nada en el html, los elementos estan dentro de componente que luego se convertiran en html y estos procesan las propiedades recibidas.

Otra explicacion similar:

***¿Cómo creamos componentes con React?***

Existen varias formas de crear componentes con React, por conveción siempre los creamos utlizando PascalCase, es decir, "La Primera Letra De Cada Palabra En Mayúscula y Juntas (TodoList)". Las formas de crear componentes en React son utilizando el metodo "react.createElement" , a través de Clases y por ultimo y el más utilizado por FUNCIONES.

- De forma declarativa.
```js
function Component() {
return ( ... JSX ) }
```

Utilizando Arrow Functions.
```js
const Component = () => {
return ( ... JSX ) }
```

#### React DOM
Es el mecanismo de procesamiento donde ingresan los componentes y elementos de React y salen etiquetas HTML en la pagina hacia el usuario final.

#### Preguntas comunes

``npm`` run Ejecuta nuestro proyecto en modo desarrollo

``npm`` build Genera versión del proyecto para desplegar a producción.

¿Y que es JSX?

***JSX*** es una extesión de la sintaxis de JS creada por Facebook (Ahora Meta) para utilizarse en React.js , su principal función es escribir codigo HTML (No es HTML sino una representación del mismo) dentro de archivos JavaScript facilitando la creación de componentes. JSX funciona como un Pre-Procesador ya que transforma el codigo .jsx a codigo JavaScript que pueda interpretar el browser, esto sucede gracias a un compilador, como lo es BABEL.

¿Dónde se renderiza (dibuja) nuestra aplicación? En el div con id="root" del index.html

¿De dónde viene lo que se renderiza? Del componente "App" que definimos en index.js

¿ Qué son los componentes ? piezas de código (generalmente en forma de funciones con nombre en mayúscula).

¿Qué retorna la función ? los elementos del componente (elementos de React), en un formato llamado JSX, el cual se parece a HTML.

¿ Qué utilidad tiene JSX ? combinar código HTML con JS para, por ejemplo, usar variables para dar valores a los atributos de los elementos

¿ Principal diferencia entre elementos y componentes ? Los elementos empiezan con minúsculas y los componentes con mayúsculas.

¿ Para qué sirven ? Para reutilizarlos y así no repetir código

¿ Cómo llamo a un componente? Escribiendo su nombre con la siguiente sintáxis < Componente1 />

¿ Cómo agrego dinamismo a los componentes para que cambien su contenido ? Recibiendo props por parámetros de la función

Nota: Los componentes se pueden anidar, es decir, meter uno dentro de otro
