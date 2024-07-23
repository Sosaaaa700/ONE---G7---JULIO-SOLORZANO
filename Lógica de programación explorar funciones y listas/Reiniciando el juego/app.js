
// Generamos el numero secreto
let numeroSecreto = generarNumeroSecreto();
// seteamos el numero de intentos
let intentos = 0;

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para verificar el intento del usuario
function verificarIntento() {
    // Obtenemos el valor del input en número
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // validamos que el número esté en el rango correcto
    if (numeroDeUsuario === numeroSecreto) {
        // El usuario acertó, indicamos el número de intentos
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        // si el usuario acertó, habilitamos el botón de reiniciar
        document.getElementById('reiniciar').removeAttribute('disabled');
        // si no acertó, verificamos si el número es mayor o menor
    } else {
        //El usuario no acertó.
        //Indicamos si el número secreto es mayor o menor
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        // le suma un intento al usuario
        intentos++;
        // llama a la función limpiarCaja, que limpia el input
        limpiarCaja();
    }
    return;
}
// Función para limpiar la caja de texto
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
// Función para generar un número aleatorio del 1 al 10
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}
// Función para reiniciar el juego, se llama al hacer click en el botón de reiniciar
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}
// Función para reiniciar el juego, se llama al hacer click en el botón de reiniciar
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}
// Llamamos a la función condicionesIniciales para iniciar el juego
condicionesIniciales();