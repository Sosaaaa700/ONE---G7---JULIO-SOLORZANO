// 1. Crear un programa que pida al usuario ingresar un día de la semana y que muestre en un mensaje si es un día hábil (lunes a viernes) o si es fin de semana (sábado o domingo). Si el usuario ingresa un valor que no corresponde a un día de la semana, mostrar un mensaje de error.
// creamso una variable para pedir el dia de la semana
let dia = prompt("Ingresa un dia de la semana")
// La primera condición es para saber si el campo esta vacio
if (dia !== ''){
    // La segunda condición es para saber si el campo ingresado es un dia de la semana
    if (dia == "Sabado" || dia == "Domingo"){
        alert("¡Buen fin de semana!")
    }else if(dia == "Lunes" || dia == "Martes" || dia == "Miercoles" || dia == "Jueves" || dia == "Viernes"){
        alert("¡Buena semana!")
    }else{
        alert('No se que ingresaste')
    }
} else{
    alert("El campo esta vacio")
}

// 2. ver si un número es positivo, negativo o cero.
// declaramos una variable para pedir un numero al usuario
let numberUser = prompt("Ingresa un número")
// convertimos el valor ingresado a un número
numberUser = parseInt(numberUser)
// La primera condición es para saber si el campo esta vacio
if (numberUser !== null){
    // La segunda condición es para saber si el número es positivo, negativo o cero
    if (numberUser >  0){
        alert("El número es positivo")
    } else if (numberUser < 0){
        alert("El número es negativo")
    } else if (numberUser == 0){
        alert("El número es 0")
    } else{
        alert("No se que ingresaste")
    }
}else{
    alert("El campo esta vacio")
}

// 3. Crear un programa de puntaje.
// declaramos una variable para pedir un puntaje al usuario
let puntacion = prompt("Ingresa tu puntaje")
// convertimos el valor ingresado a un número
puntacion = parseInt(puntacion)
// La primera condición es para saber si el campo esta vacio
if (puntacion !== null){
    // La segunda condición es para saber si el puntaje es mayor o igual a 100
    if (puntacion => 100){
        alert('GANASTEEEE')
    } else{
        alert('PERDISTE')
    }
}else{
    alert("El campo esta vacio")
}

// 4. crear un mensaje de saldo de cuenta
// declaramos la variable para pedir el saldo de cuenta al usuario
let saldoDeCuenta = prompt("Ingresa tu saldo de cuenta")
// mostramos la alerta con el saldo de cuenta
alert (`Tu saldo es de ${saldoDeCuenta} Quetzales`)

// 5. crear un mensaje de bienvenida
// declaramos la variable para pedir el nombre del usuario
let NombreUsuario = prompt("Ingresa tu nombre")
// mostramos la alerta con el nombre del usuario
alert ('hola amigo' + NombreUsuario)