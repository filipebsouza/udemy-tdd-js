describe('Testes do objeto Spy', function() {
    const calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    }

    const calculadora1 = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    }

    const calculadora2 = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    }

    const calculadora3 = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    }

    const calculadora4 = {
        somar: function(n1, n2) {
            return n1 + n2;
        },
        subtrair: function(n1, n2) {
            return n1 - n2;
        }
    }

    const calculadora5 = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    }

    beforeAll(function() {
        spyOn(calculadora, 'somar');
        spyOn(calculadora1, 'somar');
        spyOn(calculadora2, 'somar');
        spyOn(calculadora3, 'somar');
        spyOn(calculadora4, 'somar').and.callThrough();
        spyOn(calculadora4, 'subtrair');
        spyOn(calculadora5, 'somar').and.returnValue(10);
    });

    it('deve possuir o método somar como não definido', function() {
        expect(calculadora.somar(1, 1)).toBeUndefined();
    });

    //toHaveBeenCalled, foi chamado apenas uma vez
    it('deve chamar o método somar ao menos uma vez', function() {
        expect(calculadora1.somar).not.toHaveBeenCalled();
        calculadora1.somar(1, 1);
        expect(calculadora1.somar).toHaveBeenCalled();
    });

    //toHaveBeenCalledTimes, foi chamado x vezes
    it('deve chamar o método somar duas vezes', function() {
        calculadora2.somar(1, 1);
        calculadora2.somar(1, 2);
        expect(calculadora2.somar).toHaveBeenCalledTimes(2);
    });

    //toHaveBeenCalledWith, foi chamado com parametros
    it('deve chamar o método somar com os parâmetros válidos', function() {
        calculadora3.somar(1, 1);
        calculadora3.somar(1, 2);
        expect(calculadora3.somar).toHaveBeenCalledWith(1, 1);
        expect(calculadora3.somar).toHaveBeenCalledWith(1, 2);
    });

     //and.callThrough, vai chamar o método realmente, não vai simular ou usar o mock, vai usar o cara mesmo
     it('deve chamar o método somar original', function() {
        expect(calculadora4.somar(1, 1)).toEqual(2);
        expect(calculadora4.subtrair(2, 1)).toBeUndefined();
    });

     //and.returnValue, simula um retorno do método
     it('deve retornar 10 para o método somar', function() {
        expect(calculadora5.somar(1, 9)).toEqual(10);
    });
});