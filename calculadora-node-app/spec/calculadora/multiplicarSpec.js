describe('Suíte de teste de multiplicação', () => {
    const calculadora = require('../../src/js/calculadora');

    it('deve retornar 6 para 2 e 3', () => {
        expect(calculadora.multiplicar(2, 3)).toEqual(6);
    });

    it('deve retornar 6 para 2 e 3 em formato texto', () => {
        expect(calculadora.multiplicar('2', '3')).toEqual(6);
    });

    it('deve retornar 4.5 para 1.5 e 3', () => {
        expect(calculadora.multiplicar(1.5, 3)).toEqual(4.5);
    });

    it('deve retornar 0 para valor 1 inválido', () => {
        expect(calculadora.multiplicar(undefined, 5)).toEqual(0);
    });

    it('deve retornar 0 para valor 2 inválido', () => {
        expect(calculadora.multiplicar(5, undefined)).toEqual(0);
    });
});