describe('Testes do objeto jasmine.createSpyObj', () => {
  let calculadora;
  beforeAll(() => {
    calculadora = jasmine.createSpyObj('calculadora', ['somar', 'subtrair']);

    calculadora.somar.and.returnValue(5);
  });

  // Cria uma função falsa que pode ser mocada
  // Mas o ele pode retornar as coisas
  // Tudo que fiz com o calls eu consigo fazer aqui
  it('deve demonstrar o uso do jasmine.createSpyObj', () => {
    const retorno = calculadora.somar(1, 4);

    expect(calculadora.somar).toHaveBeenCalled();
    expect(calculadora.somar).toHaveBeenCalledWith(1, 4);
    expect(retorno).toEqual(5);
  });
});
