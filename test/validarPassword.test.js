const { validarPassword } = require('../src/validarPassword');

describe('Ciclo 1: Estructura básica', () => {
    test('Debe retornar un objeto con esValida (boolean) y errores (array)', () => {
        const resultado = validarPassword('123');
        expect(typeof resultado.esValida).toBe('boolean');
        expect(Array.isArray(resultado.errores)).toBe(true);
    });
});

describe('Ciclo 2: Tiene al menos 8 caracteres', () => {
    test('esValida debe retornar false si tiene menos de 8 caracteres', () => {
        const resultado = validarPassword('1234567');
        expect(resultado.esValida).toBe(false);
    });
});

describe('Ciclo 3: Tiene al menos 8 caracteres', () => {
    test('esValida debe retornar true si tiene 8 o mas caracteres', () => {
        const resultado = validarPassword('123456789');
        expect(resultado.esValida).toBe(true);
    });
});

describe('Ciclo 4: Tiene al menos 1 mayuscula', () => {
    test('esValida debe retornar false si no tiene al menos una mayuscula', () => {
        const resultado = validarPassword('asdeqdjaks');
        expect(resultado.esValida).toBe(false);
    });
});