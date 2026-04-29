const { validarPassword } = require('../src/validarPassword');

describe('Ciclo 1: Estructura básica', () => {
    test('Debe retornar un objeto con esValida (boolean) y errores (array)', () => {
        const resultado = validarPassword('123');
        expect(typeof resultado.esValida).toBe('boolean');
        expect(Array.isArray(resultado.errores)).toBe(true);
    });
});