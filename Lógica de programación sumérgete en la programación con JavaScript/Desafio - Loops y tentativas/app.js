// Declaramos las variables que vamos a necesitar
let primerContador = 1
let segundoContador = 10
let tercerContador = 0
// Creamos un bucle while que se ejecutará mientras la variable primerContador sea menor o igual a 10
while (primerContador <= 10) {
    console.log(primerContador)
    // Incrementamos la variable primerContador en 1
    // esto tambien es igual a primerContador = primerContador + 1 o primerContador += 1
    primerContador++
}
// Creamos un bucle while que se ejecutará mientras la variable segundoContador sea mayor o igual a 1
while (segundoContador >= 1) {
    console.log(segundoContador)
    // Decrementamos la variable segundoContador en 1
    segundoContador -= 1
}

// Pedimos al usuario que ingrese un número
let numero = prompt("Ingrese un número")
// Creamos un bucle while que se ejecutará mientras la variable tercerContador sea distinta a 0
while (tercerContador != numero) {
    console.log(numero)
    // Decrementamos la variable numero en 1 esto tambien es igual a numero = numero - 1 o numero -= 1
    numero--    

}