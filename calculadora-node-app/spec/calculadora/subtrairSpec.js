describe('Suíte de teste de subtração', () => {
    const calculadora = require('../../src/js/calculadora');

    it('deve retornar 5 para 8 e 3', () => {
        expect(calculadora.subtrair(8, 3)).toEqual(5);
    });

    it('deve retornar 5 para 8 e 3 em formato texto', () => {
        expect(calculadora.subtrair('8', '3')).toEqual(5);
    });

    it('deve retornar 4 para 5.5 e 1.5', () => {
        expect(calculadora.subtrair(5.5, 1.5)).toEqual(4);
    });

    it('deve retornar 0 para valor 1 inválido', () => {
        expect(calculadora.subtrair(undefined, 5)).toEqual(0);
    });

    it('deve retornar 0 para valor 2 inválido', () => {
        expect(calculadora.subtrair(5, undefined)).toEqual(0);
    });
});