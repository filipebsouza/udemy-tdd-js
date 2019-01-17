describe('Comparador toBeDefined', function() {
  it('deve validar o uso do toBeDefined', function() {
    var notDefined;
    var varUndefined = undefined; 

    expect(10).toBeDefined(); // é tipo no javascript
    expect(null).toBeDefined(); // é tipo no javascript
    expect(NaN).toBeDefined(); // é tipo no javascript
    expect(notDefined).not.toBeDefined();
    expect(varUndefined).not.toBeDefined();
  });

});
// toBeDefined para ver se está defined
// não utilizar o not.toBeDefined e sim o toBeUndefined
// nulo é um tipo no javascript