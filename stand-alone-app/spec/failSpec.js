describe('Teste do fail', function() {
  it('deve demonstrar o uso do fail', function() {
    let operacao = function(executar, callback) {
      if (executar) {
        callback();
      }
    };

    operacao(false, function() {
      fail('não deve executar função de callback');
    });
  });
});
