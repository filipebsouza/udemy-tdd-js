describe('Suíte de testes de adição', () => {
    const calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 5 para 2 e 3', () => {
        expect(calculadora.adicionar(2, 3)).toEqual(5);
    });
})