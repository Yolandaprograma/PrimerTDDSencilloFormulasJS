const calculator = require('../calculator');

const x = 15;

const y = 3;

test('Sumar números usando el método', () => {
    expect(calculator.sumar(x, y)).toBe(18)
});
test('Restar números usando el método', () => {
    expect(calculator.restar(x, y)).toBe(12)
});
test('Multiplicar números usando el método', () => {
    expect(calculator.multiplicar(x, y)).toBe(45)
});
test('Dividir números usando el método', () => {
    expect(calculator.dividir(x, y)).toBe(5)
});
test('Encontrar el resto de la división utilizando el método', () => {
    expect(calculator.modulo(x, y)).toBe(0)
});

test('Encontrar el resultado del área de un cuadrado de 5 x 5, debe ser el resultado 25', () => {
    const resultado = calculator.calcularAreaCuadrado(5);
    expect(resultado).toBe(25)
});
test('Calcular el area de un cuadrado de 0 x 0, debe dar un mensaje de error', () => {
    const resultado = calculator.calcularAreaCuadrado(0);
    expect(resultado).toBe('Error el lado debe ser mayor a 0')
});


test('Encontrar el resultado del área de un rectángulo de 2 x 4 debe ser el resultdo 8', () => {
    const resultado = calculator.calcularAreaRectangulo(2, 4);
    expect(resultado).toBe(8)
});

test('Encontrar el resultado del área de un triángulo de altura 12 y base 20 debe ser el resultdo 120', () => {
    const resultado = calculator.calcularAreaTriangulo(12, 20);
    expect(resultado).toBe(120)
});



