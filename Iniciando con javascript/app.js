// Esto es un mensaje en pantalla. Las comillas simples o dobles son necesarias para que el mensaje se muestre en pantalla.
alert('Hola mundo');

// Esto es un mensaje en pantalla. Las comillas simples o dobles son necesarias para que el mensaje se muestre en pantalla. 
// let es una palabra reservada de JavaScript que se utiliza para declarar una variable.
let numberUser = prompt('Dime un numero'); 

// Diferecias entre let, var y const
//  let: se utiliza para declarar variables que pueden cambiar su valor.
//  var: se utiliza para declarar variables que pueden cambiar su valor.
//  const: se utiliza para declarar variables que no pueden cambiar su valor.


// Console.log es una función que se utiliza para imprimir mensajes en la consola del navegador.
// Esto es un mensaje que se enseñara en consola, esto arriba se describe como se declara una variable.
console.log(numberUser);


// Sentencia If
// if es una palabra reservada de JavaScript que se utiliza para realizar una condición. 
let numberSecret = '5';
if (numberUser == numberSecret) {
    alert('Has adivinado el número secreto');
} else{
    alert('No has adivinado el número secreto');
}
// En este caso se compara si el número que ha introducido el usuario es igual al número secreto. Si es así, se muestra un mensaje en pantalla.
// Pero antes debemos se declaro la variable numberSecret con el valor 5.
// y debemos verificar el tipo de dato que se esta comparando, en este caso se esta comparando un string con un numero, por lo que se debe convertir el string a numero.