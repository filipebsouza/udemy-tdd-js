describe('Testes do objeto Spy', () => {
    const calculadora = {
        somar: (n1, n2) => n1 + n2
    }

    const calculadora1 = {
        somar: (n1, n2) => n1 + n2
    }

    const calculadora2 = {
        somar: (n1, n2) => n1 + n2
    }

    const calculadora3 = {
        somar: (n1, n2) => n1 + n2
    }

    const calculadora4 = {
        somar: (n1, n2) => n1 + n2,
        subtrair: (n1, n2) => n1 - n2
    }

    const calculadora5 = {
        somar: (n1, n2) => n1 + n2
    }

    const calculadora6 = {
        somar: (n1, n2) => n1 + n2
    }

    const calculadora7 = {
        somar: (n1, n2) => n1 + n2        
    }

    const calculadora8 = {
        somar: (n1, n2) => n1 + n2        
    }

    beforeAll(() => {
        spyOn(calculadora, 'somar');

        spyOn(calculadora1, 'somar');
        spyOn(calculadora2, 'somar');

        spyOn(calculadora3, 'somar');

        spyOn(calculadora4, 'somar').and.callThrough();
        spyOn(calculadora4, 'subtrair');

        spyOn(calculadora5, 'somar').and.returnValue(10);

        spyOn(calculadora6, 'somar').and.returnValues(10, 20);

        spyOn(calculadora7, 'somar').and.callFake((n1, n2) => n1 - n2);

        spyOn(calculadora8, 'somar').and.throwError('Erro');
    });

    it('deve possuir o método somar como não definido', () => {
        expect(calculadora.somar(1, 1)).toBeUndefined();
    });

    //toHaveBeenCalled, foi chamado apenas uma vez
    it('deve chamar o método somar ao menos uma vez', () => {
        expect(calculadora1.somar).not.toHaveBeenCalled();
        calculadora1.somar(1, 1);
        expect(calculadora1.somar).toHaveBeenCalled();
    });

    //toHaveBeenCalledTimes, foi chamado x vezes
    it('deve chamar o método somar duas vezes', () => {
        calculadora2.somar(1, 1);
        calculadora2.somar(1, 2);
        expect(calculadora2.somar).toHaveBeenCalledTimes(2);
    });

    //toHaveBeenCalledWith, foi chamado com parametros
    it('deve chamar o método somar com os parâmetros válidos', () => {
        calculadora3.somar(1, 1);
        calculadora3.somar(1, 2);
        expect(calculadora3.somar).toHaveBeenCalledWith(1, 1);
        expect(calculadora3.somar).toHaveBeenCalledWith(1, 2);
    });

     //and.callThrough, vai chamar o método realmente, não vai simular ou usar o mock, vai usar o cara mesmo
     it('deve chamar o método somar original', () => {
        expect(calculadora4.somar(1, 1)).toEqual(2);
        expect(calculadora4.subtrair(2, 1)).toBeUndefined();
    });

     //and.returnValue, simula um retorno do método
     it('deve retornar 10 para o método somar', () => {
        expect(calculadora5.somar(1, 9)).toEqual(10);
    });

    //and.returnValues, simula um retorno do método, mais de uma vez
    it('deve retornar valores distintos para o método somar', () => {
        expect(calculadora6.somar(1, 9)).toEqual(10);
        expect(calculadora6.somar(4, 3)).toEqual(20);
        expect(calculadora6.somar(1, 9)).toBeUndefined();
    });

     //and.callFake, passo uma função e implemento uma nova chamada. É como se fosse um stub
     it('deve transformar método somar em subtração', () => {
        expect(calculadora7.somar(9, 1)).toEqual(8);
    });

     //and.throwError, a mensagem de erro
     it('deve lançar um erro ao somar', () => {
        expect(() => calculadora8.somar(9, 1)).toThrowError('Erro');
    });
});