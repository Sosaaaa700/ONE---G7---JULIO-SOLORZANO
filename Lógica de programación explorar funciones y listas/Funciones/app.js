// seleccionamos el elemento h1
let titulo = document.querySelector('h1');
// cambiamos el contenido del elemento h1
titulo.innerHTML = 'Juego del numero secreto'
// seleccionamos el elemento p
let parrafo = document.querySelector('p');
// cambiamos el contenido del elemento p
parrafo.innerHTML = 'Adivina el número secreto entre 1 y 10'

// RECORDEMOS QUE:
// el innerHTML nos permite cambiar el contenido de un elemento HTML
// el querySelector nos permite seleccionar un elemento HTML


// creamos una variable numeroSecreto que guarda el numero secreto que el usuario debe adivinar
// lo que hace la funcion generarNumeroSecreto es generar un numero aleatorio entre 1 y 10
// y lo guarda en la variable numeroSecreto
let numeroSecreto = generarNumeroSecreto()

// creamos la funcion asignarTextoElmento que recibe dos parametros, el id del elemento y el texto que queremos asignarle

function asignarTextoElmento(id, texto){
    // seleccionamos el elemento HTML con el id que recibimos como parametro
    let elementoHtml = document.querySelector(id);
    // cambiamos el contenido del elemento HTML
    elementoHtml.innerHTML = texto;
    // la palabrar return sirve para terminar la ejecucion de la funcion
    // tambien se puede usar para devolver un valor
    return
}


// creamos la funcion intentoUsuario que se disparara, cuando le demos al boton intentar.
function verificarIntento(){
    // guardamos en la variable numeroUsuario el valor que el usuario ingreso en el input
    // parseInt convierte el valor del input a un numero entero
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value)
    // imprimimos el numero que ingreso el usuario
    console.log(numeroUsuario)
    // imprimimos el numero secreto
    console.log(numeroSecreto)
    // comparamos si el numero que ingreso el usuario es igual al numero secreto
    // si son iguales mostrara un true, si son diferentes mostrara un false
    console.log(numeroUsuario == numeroSecreto)
    return

}

function generarNumeroSecreto() {
    // la funcion Math.random() nos devuelve un numero decimal entre 0 y 10
    return Math.floor((Math.random() * 10)+1)
    
}


// llamamos a la funcion asignarTextoElmento y le pasamos como parametros el id del elemento y el texto que queremos asignarle
asignarTextoElmento('h1', 'nuevo texto del juego secreto')
// llamamos a la funcion asignarTextoElmento y le pasamos como parametros el id del elemento y el texto que queremos asignarle
// en este caso fue el parrafo
asignarTextoElmento('p', 'nuevo texto del 1 al 100')


