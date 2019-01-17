describe('Comparador toBeNull', function() {
  it('deve validar o uso do toBeNull', function() {
    expect(null).toBeNull();
    expect(undefined).not.toBeNull();
    expect(10).not.toBeNull();
    expect(NaN).not.toBeNull();
  });

});
// toBeNull para ver se está null
// nulo é um tipo no javascript
// null = tipo
// undefined = variavel ainda não definida