describe('Testes do objecto jasmine.spy', () => {
    let dobro;
    
    beforeAll(() => {
        dobro = jasmine.createSpy('dobro');
    });

    if('deve demonstrar o uso do jasmine.any', () => {
        dobro(10);
        expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
    });
});