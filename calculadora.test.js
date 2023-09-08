const calculadora = require("./calculadora")

test('Somar 1 mais 2 é igual a 3', () => {
    expect(calculadora.somar(1, 2)).toBe(3);
});

test('Subtrair 5 menos 3 é igual a 2', () => {
    expect(calculadora.subtrair(5, 3)).toBe(2);
});

test('Somar 1 mais 2 é igual a 3', () => {
    expect(calculadora.multiplicar(3, 3)).toBe(9);
});

test('Somar 1 mais 2 é igual a 3', () => {
    expect(calculadora.dividir(10, 2)).toBe(5);
});