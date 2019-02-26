describe('Teste do afterEach', function() {
    let contador = 0;

    beforeEach(function() {
        contador++;
    });

    afterEach(function() {
        contador = 0;
    });

    it('deve garantir o valor 1 para o contador', function() {
        expect(contador).toEqual(1);
    });
})