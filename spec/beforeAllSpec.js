describe('Teste do beforeAll', function() {
    // executa uma vez antes de todos os testes da suite
    let contador = 0;

    beforeAll(function() {
        contador = 10;
    });

    beforeEach(async function() {
        await contador++;
    });

    it('deve garantir o valor 11 para o contador', async function() {
        await expect(contador).toEqual(11);
    });
})