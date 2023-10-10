// Operaciones 

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function calcularAreaCuadrado (lado){
    if(lado < 1){
        return 'Error el lado debe ser mayor a 0';
    }
        return lado * lado
}

function calcularAreaRectangulo(ancho, alto){
    return ancho * alto;
}

function calcularAreaTriangulo(altura, base){
    return base * altura / 2;
}

module.exports = { sumar, restar, multiplicar, dividir, modulo, calcularAreaCuadrado, calcularAreaRectangulo, calcularAreaTriangulo };



