// VARIABLES
// camel-case
let nombreCohorte = "Front-10";
let metrosCuadrados = 10;


//Constantes 
// snake-case
// upper-case
const AÑO_NACIMIENTO = 2002;
const PI = 3.1416;
const MESE_DEL_AÑO = 12;



// Metodos para capturar elementos
let nombrePersonaje = document.querySelector("h1");
let nombrePersonaje = document.getElementById("h1");

// Metodos para cambiar los estilos de un elemento 
cuerpoElemento.style.backgroundColor = 'pink';
nombrePersonaje.style.fontSize = '100px';


//Metodos para agregar y eliminar clases de un elemento
nombrePersonaje.classList.add('titulo');
nombrePersonaje.classList.remove('titulo')

//Metodo para actulizar los valores de los atributos de las etiquetas
imagenPersonaje.setAttribute('src', 'https://canalhistoria.es/wp-content/uploads/2018/09/Madame-Curie-2.jpg' )


//Metodo para crear etiquetas desde javascrip 
let imagen = document.createElement('img');

// metodo para inservar elementos al DOM
contenedor.appendChild(imagen);

contenedor.innerHTML = `<h1>Hola a todos</h1>`;