describe('Comparador toBe', function() {
  it('deve validar o uso do toBe', function() {
    expect(true).toBe(true);
  });

  it('deve validar o uso do toBe com string', function() {
    expect('teste').toBe('teste');
  });

  it('deve validar o uso do toBe com objetos', function() {
    var obj1 = { valor: true };
    var obj2 = { valor: true };

    expect(obj1)
      .not
      .toBe(obj2);
  });
});
// toBe compara o valor e o objeto
// realiza a comparação como se fosse o ===
