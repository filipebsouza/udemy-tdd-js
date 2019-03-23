describe('Testes do objeto Spy', () => {
    const calculadora = {
        somar: (n1, n2) => n1 + n2
    }

    const calculadora1 = {
        somar: (n1, n2) => n1 + n2
    }

    // Todo spy possui o atributo calls
    // Que informa uma série de dados sobre o spy

    beforeAll(() => {
        spyOn(calculadora, 'somar');

        spyOn(calculadora1, 'somar');
    });

    it('deve ser chamado pelo menos uma vez, parecido com o haveBeenCalled', () => {
        calculadora.somar(1, 9);
        expect(calculadora.somar.calls.any()).toBeTruthy();
    });  
    
    it('deve ser chamado algumas vezes, parecido com o haveBeenCalledTimes', () => {
        calculadora1.somar(1, 9);
        calculadora1.somar(1, 9);
        expect(calculadora1.somar.calls.count()).toEqual(2);
    });  
});