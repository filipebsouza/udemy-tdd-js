describe('Comparador toBeUndefined', function() {
  it('deve validar o uso do toBeUndefined', function() {
    var notDefined;
    var varUndefined = undefined; 

    expect(notDefined).toBeUndefined();
    expect(varUndefined).toBeUndefined();
    expect(10).not.toBeUndefined(); // é tipo no javascript
  });

});
// toBeUndefined para ver se está undefined
// não utilizar o not.toBeUndefined e sim o toBeDefined
// nulo é um tipo no javascript