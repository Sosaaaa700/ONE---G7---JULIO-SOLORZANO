
// Declaramos el numero secreto 
let numeroSecreto = 6
// Pedimos al usuario que adivine el numero secreto, recuerda que el prompt es de tipo string
let numeroUsuario = prompt("Adivina el numero secreto")

// miramos en la consola que tipo de dato es el numeroUsuario y la variable numeroUsuario   
// en el primer console.log nos muestra que el tipo de dato es string
console.log(typeof numeroUsuario)
// en el segundo console.log nos muestra el valor que ingreso el usuario
console.log(numeroUsuario)

// creamos el if donde validamos que el numeroUsuario sea igual al numeroSecreto
// el parseInt es para convertir el string a numero
if (parseInt(numeroUsuario) == numeroSecreto) {
    // si el numeroUsuario es igual al numeroSecreto mostramos un mensaje en una alerta
    alert("Felicidades adivinaste el numero secreto")
}else{
    // si el numeroUsuario no es igual al numeroSecreto mostramos un mensaje en una alerta
    alert(`Lo siento, el numero secreto era 6 y tu ingreaste el ${numeroUsuario}`)
}

/*
    Ejemplos de concatenacion de strings.
    En el alert(`Lo siento, el numero secreto era 6 y tu ingreaste el ${numeroUsuario}`)
    estamos concatenando el string "Lo siento, el numero secreto era 6 y tu ingreaste el " con el valor de la variable numeroUsuario
    PEROOOO, este tipo de concatenacion solo se puede usar inciando y terminado con los caracteres ``
    si usamos comillas simples '' o dobles "" no funcionara
    tambien podemos concatenar con el signo +, pero en este caso no podemos usar las comillas ``
    Ejemplo con el signo +
    alert("Lo siento, el numero secreto era 6 y tu ingreaste el " + numeroUsuario)
    Ejemplo con comillas simples y dobles
    alert('Lo siento, el numero secreto era 6 y tu ingreaste el ' + numeroUsuario)
    alert("Lo siento, el numero secreto era 6 y tu ingreaste el " + numeroUsuario)
*/

/*
    OTRA ACLACION IMPORANTE
    En alert(`Lo siento, el numero secreto era 6 y tu ingreaste el ${numeroUsuario}`)
    en ${ejemplo}
    donde ejemplo tambien puede ser codigo de javascript.
*/
