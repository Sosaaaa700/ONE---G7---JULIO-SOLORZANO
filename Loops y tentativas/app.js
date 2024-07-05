
// Declaramos las variables numeroSecreto, numeroUsuario e intentos
let numeroSecreto = 6
let numeroUsuario = 0
let intentios = 1
let palabraveces = "vez"
// condicion while, es un bucle que se repite mientras la condicion sea verdadera
// lo que validamos es que el numeroUsuario sea diferente al numeroSecreto
// una vez lo sea el bucle se detiene
while (numeroUsuario != numeroSecreto) {


    // Pedimos al usuario que adivine el numero secreto, recuerda que el prompt es de tipo string
    numeroUsuario = prompt("Adivina el numero secreto")


    // miramos en la consola que tipo de dato es el numeroUsuario y la variable numeroUsuario   
    // en el primer console.log nos muestra que el tipo de dato es string
    console.log(typeof numeroUsuario)
    // en el segundo console.log nos muestra el valor que ingreso el usuario
    console.log(numeroUsuario)

    // creamos el if donde validamos que el numeroUsuario sea igual al numeroSecreto
    // el parseInt es para convertir el string a numero
    if (parseInt(numeroUsuario) == numeroSecreto) {
        // si el numeroUsuario es igual al numeroSecreto mostramos un mensaje en una alerta
        alert("Felicidades adivinaste el numero secreto, lo hiciste en ", intentios, palabraveces)
    } else {
        // ejemplo de ifs anidados
        // un if anidado es una condicon if dentro de otro if
        // verificamos si el numeroUsuario es mayor o menor al numeroSecreto
        // si lo es mostramos un mensaje en una alerta
        if (numeroUsuario > numeroSecreto) {
            alert("El numero secreto es menor")
        } else {
            // de lo contrario mostramos un mensaje en una alerta
            alert("El numero secreto es mayor")
        }
        // incrementamos la variable, la cual nos sirve para contar los intentos
        intentos += 1
        // validamos si la variable intentos es mayor a 1, si lo es cambiamos la palabra vez por veces
        palabraveces = "veces"
    }

}