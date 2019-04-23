//três tipos de modos de desabilitar

describe('Teste do beforeEach com função desabiltada', function() {
    let contador = false;

    beforeEach(function() {
        contador = true;
    });

    xit('deve incrementar o contador para true', function() {
        expect(contador).toEqual(true);
    });

    it('deve incrementar o contador para true');

    it('deve incrementar o contador para true', function() {
        expect(contador).toEqual(true);
        pending('ainda vou implementar');
    });
})