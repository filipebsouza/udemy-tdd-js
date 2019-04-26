describe('Suíte de testes de adição', () => {
    const calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 5 para 2 e 3', () => {
        expect(calculadora.adicionar(2, 3)).toEqual(5);
    });

    it('deve retornar 6 para 9 e -3 no formato texto', () => {
        expect(calculadora.adicionar('9', '-3')).toEqual(6);
    });

    it('deve retornar 4.5 para 1.5 e 3', () => {
        expect(calculadora.adicionar(1.5, 3)).toEqual(4.5);
    });

    it('deve retornar 0 quando valor 1 não numérico', () => {
        expect(calculadora.adicionar(undefined, 10)).toEqual(0);
    });

    it('deve retornar 0 quando valor 2 não numérico', () => {
        expect(calculadora.adicionar(10, undefined)).toEqual(0);
    });
})