describe('Teste do toBeFalsy', function() {
  it('deve demonstrar o uso do toBeFalsy', function() {
    expect(0).toBeFalsy();
    expect('').toBeFalsy();
    expect(null).toBeFalsy();
    expect(NaN).toBeFalsy();
    expect(false).toBeFalsy();

    expect(true).not.toBeFalsy();
  });
});
