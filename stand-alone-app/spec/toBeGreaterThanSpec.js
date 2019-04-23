describe('Teste do toBeGreaterThan', function() {
  it('deve demonstrar o uso do toBeGreaterThan', function() {
    //é para valores maiores, para igual use o toEqual
    //pode ser usado string tb
    let PI = 3.1415;

    expect(4).toBeGreaterThan(PI);
    expect('5').toBeGreaterThan(PI);
    
    expect(2).not.toBeGreaterThan(PI);
  });
});
