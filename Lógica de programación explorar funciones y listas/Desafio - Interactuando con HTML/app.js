
// 2 - seleccionamos el elmento h1 y lo guardamos en una variable
// seleccionamos el elmento h1 y lo guardamos en una variable
let title = document.querySelector('h1');
// cambiando el texto del h1 por el texto 'hora del desafio' 
title.textContent = "hora del desafio"

// 3 - creamos la funcion botonConsole
function botonConsole(){
    // mostramos un mensaje en la consola
    console.log('El boton fue clickeado');
}

// 4 - creamos la funcion botonPrompt
function botonPrompt(){
    // pedimos al usuario que escriba su nombre con un prompt
    // el promt es de tipo string y lo guardamos en la variable nombre
    let ciudad = prompt('Escribe tu ciudad de brasil');
    // mostramos un mensaje en una alerta con la ciudad que ingreso el usuario
    alert(`Estuve en la ciudad de ${ciudad} y me acorde de ti `);
}

// 5 - creamos la funcion botonAlert
function botonAlert(){
    // mostramos un mensaje en una alerta
    // con el mensaje 'Yo amo js'
    alert("Yo amo js")
}

// 6 - creamos la funcion boton suma
function botonSuma(){
    // creamos el primer mensaje con un prompt para pedirle un numero
    let num1 = prompt('Ingresa un numero');
    // creamos el segundo mensaje con un prompt para pedirle un numero
    let num2 = prompt('Ingresa otro numero');
    // convertimos los numeros a enteros con parseInt
    // guardamos el resultado en la variable suma
    let suma = parseInt(num1) + parseInt(num2);
    // mostramos un mensaje en una alerta con la suma de los dos numeros
    alert(`La suma de los dos numeros es ${suma}`);
}
