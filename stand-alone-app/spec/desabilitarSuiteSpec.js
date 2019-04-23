//só colocar um x na frente

xdescribe('Teste do beforeEach desabilitado', function() {
    let contador = false;

    beforeEach(function() {
        contador = true;
    });

    it('deve incrementar o contador para true', function() {
        expect(contador).toEqual(true);
    });
})