
// 1. Crear una función que imprima un saludo en consola
function saludo(){
    return console.log('Hola Mundo');
}
// 2. Crear una función que reciba como parámetro un nombre y lo imprima en consola
function nombre(name){
    return console.log('Hola ' + name);
}
// 3. Crear una función que reciba un número, lo multiplique y lo imprima en consola
function numeroDouble(number){
    return console.log(number * 2);
}

// 4. Crear una función que reciba tres números y devuelva el promedio
function promedio(num1, num2, num3){
    return console.log((num1 + num2 + num3) / 3);
}

// 5. Crear una funcion donde compara cual es el numero mayor
function max(num1, num2){
    if(num1 > num2){
        return console.log('el numero mayor es:  ' + num1);
    }else{
        return console.log('el numero mayor es: '+ num2);
    }
}
// 6. Crear una funcion donde multiplica el numero por si mismo
function multpSiMismo(num1){
    return console.log(num1 * num1);
}

// LLAMADAS DE TODAS LAS FUNCIONES
saludo()
nombre('gisselle')
numeroDouble(8)
promedio(6, 6, 6)
max(4, 6)
multpSiMismo(6)

// ALGO IMPORTANTE:
// EN TODAS LAS FUNCIONES TAMBIEN PODEMOS DEFINIR EL TIPO DE DATO QUE SE NECESITA