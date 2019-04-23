describe('Comparador toMatch', function() {
  it('deve validar o uso do toMatch', function() {
    const texto = 'teste com Jasmine';

    expect(texto).toMatch("Jasmine");
    expect(texto).toMatch(/Jasmine/i);
  });

  it('deve validar o uso do toMatch para validar um CEP', function() {
    const cep = '12345-456';

    expect(cep).toMatch(/^\d{5}-\d{3}$/);
  });

});
// toMatch dá pra usar expressões regulares