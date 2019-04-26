describe('Suíte de teste de divisão', () => {
    const calculadora = require('../../src/js/calculadora');

    it('deve retornar 2 para 6 e 3', () => {
        expect(calculadora.dividir(6, 3)).toEqual(2);
    });

    it('deve retornar 2 para 6 e 3 em formato texto', () => {
        expect(calculadora.dividir('6', '3')).toEqual(2);
    });

    it('deve retornar 1.5 para 4.5 e 3', () => {
        expect(calculadora.dividir(4.5, 3)).toEqual(1.5);
    });

    it('deve retornar "Erro" para divisão por 0', () => {
        expect(calculadora.dividir(5, 0)).toEqual("Erro");
    });

    it('deve retornar 0 para valor 1 inválido', () => {
        expect(calculadora.dividir(undefined, 5)).toEqual(0);
    });

    it('deve retornar 0 para valor 2 inválido', () => {
        expect(calculadora.dividir(5, undefined)).toEqual(0);
    });
});