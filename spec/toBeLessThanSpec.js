describe('Teste do toBeLessThan', function() {
  it('deve demonstrar o uso do toBeLessThan', function() {
    //é para valores menores, para igual use o toEqual
    //pode ser usado string tb
    let PI = 3.1415;

    expect(3).toBeLessThan(PI);
    expect(3.5).not.toBeLessThan(PI);
  });
});
