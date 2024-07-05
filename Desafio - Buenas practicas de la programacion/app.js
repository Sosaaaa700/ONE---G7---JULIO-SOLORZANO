// 1. Mensaje de bienvenida
console.log("Hola, bievenido :D")
// 2. Crear mensaje de bienvenida con variable
var nombre = "Julio Solorzano"
console.log(`Hola, ${nombre} :D`)
// 3. Crear mensaje de bievenida con variable (alert)
alert(`Hola, ${nombre} :D`)
// 4. uso del prompt
var lenguaje = prompt("¿Cual es tu lenguaje de programacion favorito?")
console.log(`Tu lenguaje de programacion favorito es: ${lenguaje}`)
// 5. suma de valores
var num1 = 20
var num2 = 10
var suma = num1 + num2
console.log(`La suma de ${num1} + ${num2} = ${suma}`)
// 6. Resta de valores
var resta = num1 - num2
console.log(`La resta de ${num1} - ${num2} = ${resta}`)
// 7. prompt de edad
var edad = prompt("¿Cual es tu edad?")
if (edad >= 18) {
    alert("Eres mayor de edad")
    console.log("Eres mayor de edad")
} else {
    alert("Eres menor de edad")
    console.log("Eres menor de edad")
}
// 8. validar si un numero es positivo o negativo
var numero = prompt("Ingresa un numero")
if (numero >= 0) {
    alert("El numero es positivo")
    console.log("El numero es positivo")
}else { 
    alert("El numero es negativo")
    console.log("El numero es negativo") 
}
// 9. while contador del numero del 1 al 10
var contador = 1
while (contador <= 10) {
    console.log(contador)
    contador++
}
// 10. calificacion de un alumno
var calificacion = 7
if (calificacion >= 7 ){
    console.log("Aprobado")
}else{
    console.log("Reprobado")
}
// 11. uso de math.random
var numeroRandom = Math.random()
console.log(numeroRandom)
// 12. uso de math.random de numero entero del 1 al 10
var numeroRandom = Math.floor(Math.random() * 10) + 1
console.log(numeroRandom)
// 13 uso de math.random de un numeor entre 1 y 1000
var numeroRandom = Math.floor(Math.random() * 1000) + 1
console.log(numeroRandom)

