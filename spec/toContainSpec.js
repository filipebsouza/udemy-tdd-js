describe('Teste do toContain', function() {
  it('deve demonstrar o uso do toContain', function() {
    let texto = 'Meu nome é Filipe';
    let frutas = ['laranja', 'banana', 'pera'];

    expect(texto).toContain('Filipe');
    expect(texto).not.toContain('filipe');
    
    expect(frutas).toContain('laranja');
    expect(frutas).not.toContain('uva');
  });
});
