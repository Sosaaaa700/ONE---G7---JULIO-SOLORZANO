// tenemos el elemento h1 en la variable titulo
// esto en si es un objeto
let titulo = document.querySelector('h1');

// lo que hacemos es cambiar el texto del h1
// por el texto 'Hola Mundo'
titulo.textContent = 'Hola Mundo';

// si queremos solo añadir cosas al titulo seria
titulo.innerHTML += ' desde JavaScript';

// seleccionamos el parrafo con un query selector que es un metodo de document
// que nos permite seleccionar elementos de html
let parrafo = document.querySelector('p');

// añaadimos un texto al parrafo
parrafo.textContent = 'Escoje un numero del 1 al 10';


// declaramos la funcion que se ejecutara cuando el usuario haga click en el boton
function intentoUsuario(){
    // cuando le de click al boton se ejecutara esta funcion
    // lo cual mostrara un alert con el texto 'Has hecho click en el boton'
    alert('Has hecho click en el boton');
}