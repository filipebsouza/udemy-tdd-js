describe('Testes do objeto Spy', () => {
  const calculadora = {
    somar: (n1, n2) => n1 + n2
  };

  const calculadora1 = {
    somar: (n1, n2) => n1 + n2
  };

  const calculadora2 = {
    somar: (n1, n2) => n1 + n2
  };

  const calculadora3 = {
    somar: (n1, n2) => n1 + n2
  };

  const calculadora4 = {
    somar: (n1, n2) => n1 + n2
  };

  const calculadora5 = {
    somar: (n1, n2) => n1 + n2
  };

  const calculadora6 = {
    somar: (n1, n2) => n1 + n2
  };

  const calculadora7 = {
    somar: (n1, n2) => n1 + n2
  };

  // Todo spy possui o atributo calls
  // Que informa uma série de dados sobre o spy

  beforeAll(() => {
    spyOn(calculadora, 'somar');

    spyOn(calculadora1, 'somar');

    spyOn(calculadora2, 'somar');

    spyOn(calculadora3, 'somar');

    spyOn(calculadora4, 'somar').and.returnValue(6);

    spyOn(calculadora5, 'somar');

    spyOn(calculadora6, 'somar');

    spyOn(calculadora7, 'somar');
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

  // argsFor mantém um histórico das chamadas que fica num array
  it('deve ser chamado com alguns parâmetros, parecido com o haveBeenCalledWith', () => {
    calculadora2.somar(1, 9);
    calculadora2.somar(1, 2);
    // argsFor(indice da chamada, indice Zero é a primeira chamada)
    expect(calculadora2.somar.calls.argsFor(0)).toEqual([1, 9]);
    expect(calculadora2.somar.calls.argsFor(1)).not.toEqual([1, 9]);
  });

  it('deve ser chamado com todas as chamadas do método, parecido com o argsFor, mas com todos', () => {
    calculadora3.somar(1, 9);
    calculadora3.somar(1, 2);
    expect(calculadora3.somar.calls.allArgs()).toEqual([[1, 9], [1, 2]]);
  });

  // Também mantém uma lista das chamadas
  it('deve ser chamado as informações do objeto', () => {
    calculadora4.somar(1, 9);
    calculadora4.somar(1, 5);
    const retorno = calculadora4.somar.calls.all();
    expect(retorno[1].object).toEqual(calculadora4);
    expect(retorno[1].args).toEqual([1, 5]);
    expect(retorno[1].returnValue).toEqual(6);
  });

  it('deve ser chamado para retornar os dados da última chamada (indice da lista - 1), calls.mostRecent', () => {
    calculadora5.somar(1, 9);
    calculadora5.somar(1, 2);
    expect(calculadora5.somar.calls.mostRecent().args).toEqual([1, 2]);
    expect(calculadora5.somar.calls.mostRecent().object).toEqual(calculadora5);
  });

  it('deve ser chamado para retornar os dados da primeira chamada (indice da lista = 0), calls.first', () => {
    calculadora6.somar(1, 9);
    calculadora6.somar(1, 2);
    expect(calculadora6.somar.calls.first().args).toEqual([1, 9]);
    expect(calculadora6.somar.calls.mostRecent().object).toEqual(calculadora6);
  });

  // Limpa as chamadas do calls do método do spy
  it('deve calls.reset para limpar as chamdas do spy', () => {
    calculadora7.somar(1, 9);
    expect(calculadora7.somar.calls.any()).toBeTruthy();
    calculadora7.somar.calls.reset();
    expect(calculadora7.somar.calls.any()).not.toBeTruthy();
  });
});
