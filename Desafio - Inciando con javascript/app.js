// 1. Declaramos la alerta
alert('¡Bienvenida y bienvenido a nuestro sitio web!')

// 2. Declaramos la variable nombre
let nombre = 'Luna'

// 3. creamos una variable edad y le asignasmos 25 (int)
let edad = 25

// 4. Declaramos la variable numeroDeventas
let numeroDeVentas = 50

// 5. Declaramos la variable saldoDisponible
let saldoDisponible = 1000

// 6. Creamos el mensaje de error
let mensajeError = '¡Error! Completa todos los campos'

// 7. creamos el prompt
let nombreUsuario = prompt('¿Cuál es tu nombre?')
let edadUsuario = prompt('¿Cuál es tu edad?')

// 8 y 9. creamos el if que valida que tenga las variables
// lo que estamos haciendo en este if es validar que las variables nombreUsuario y edadUsuario no sean nulas o vacias
// si no son nulas o vacias, entonces se ejecuta el if
// pero si son nulas o vacias, entonces se ejecuta el else
if (nombreUsuario && edadUsuario !== null) {

    // 10. creamos el if que valida si es mayor de edad
    // Esto tambien se le conoce como if anidados
    if (edadUsuario >= 18) {
        alert('Si puedes sacar tu licencia, ' + nombreUsuario )
    }else{
        alert('No puedes sacar tu licencia, ' + nombreUsuario)
    }

}else{
    alert(mensajeError)
}