describe('Testes do objeto jasmine.createSpy', () => {
  let somar;
  beforeAll(() => {
    somar = jasmine.createSpy('somar');
  });

  // Cria uma função falsa que pode ser mocada
  // Mas o ele não retorna nada, nem mesmo existe
  it('deve demonstrar o uso do jasmine.createSpy', () => {
    somar(1, 2);
    expect(somar).toHaveBeenCalled();
    expect(somar).toHaveBeenCalledWith(1, 2);
  });
});
