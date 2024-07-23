// Función para calcular el Índice de Masa Corporal (IMC)
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

// Función para calcular el factorial de un número
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Función para convertir dólares a reales
function convertirDolaresAReales(dolares) {
    const tasaDeCambio = 4.80;
    let reales = dolares * tasaDeCambio;
    return reales;
}

// Función que muestra el área y el perímetro de una sala rectangular
function calcularSalaRectangular(altura, anchura) {
    let area = altura * anchura;
    let perimetro = 2 * (altura + anchura);
    console.log("Área de la sala rectangular:", area);
    console.log("Perímetro de la sala rectangular:", perimetro);
}

// Función que muestra el área y el perímetro de una sala circular
function calcularSalaCircular(radio) {
    const PI = 3.14;
    let area = PI * radio * radio;
    let perimetro = 2 * PI * radio;
    console.log("Área de la sala circular:", area);
    console.log("Perímetro de la sala circular:", perimetro);
}

// Función que muestra la tabla de multiplicar de un número
function mostrarTablaDeMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

// Ejemplos de uso:
let peso = 70; // kg
let altura = 1.75; // metros
console.log("IMC:", calcularIMC(peso, altura));

let numeroFactorial = 5;
console.log("Factorial:", factorial(numeroFactorial));

let dolares = 50;
console.log("Reales:", convertirDolaresAReales(dolares));

let alturaSala = 5; // metros
let anchuraSala = 4; // metros
calcularSalaRectangular(alturaSala, anchuraSala);

let radioSala = 3; // metros
calcularSalaCircular(radioSala);

let numeroTabla = 7;
mostrarTablaDeMultiplicar(numeroTabla);
