describe('Teste do beforeEach', function() {
    let contador = false;

    beforeEach(function() {
        contador = true;
    });

    it('deve incrementar o contador para true', function() {
        expect(contador).toEqual(true);
    });
})