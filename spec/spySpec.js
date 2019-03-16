describe('Testes do objeto Spy', function() {
    const calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    }

    beforeAll(function() {
        spyOn(calculadora, 'somar');
    });

    it('deve possuir o método somar como não definido', function() {
        expect(calculadora.somar(1, 1)).toBeUndefined();
    });

    //toHaveBeenCalled, foi chamado apenas uma vez
    it('deve chamar o método somar ao menos uma vez', function() {
        expect(calculadora.somar).not.toHaveBeenCalled();
        calculadora.somar(1, 1);
        expect(calculadora.somar).toHaveBeenCalled();
    });
});