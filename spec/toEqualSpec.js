describe('Comparador toEqual', function() {
  it('deve validar o uso do toEqual', function() {
    expect(true).toEqual(true);
  });

  it('deve validar o uso do toEqual com string', function() {
    expect('teste').toEqual('teste');
  });

  it('deve validar o uso do toEqual com objetos', function() {
    var obj1 = { valor: true };
    var obj2 = { valor: true };

    expect(obj1).toEqual(obj2); // apesar de serem objetos diferentes, para o toEqual tanto faz
  });
});
// toEqual o valor, não compara o tipo do objeto
// realiza a comparação como se fosse o ===
