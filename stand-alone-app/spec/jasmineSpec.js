describe('Testes do objecto jasmine.spy', () => {
    let dobro;
    let dobro2;
    let dobro3;
    let carro;
    let numeros;
    let exibirTexto;

    beforeAll(() => {
        dobro = jasmine.createSpy('dobro');
        dobro2 = jasmine.createSpy('dobro2');
        dobro3 = jasmine.createSpy('dobro3');
        carro = {
            ano: 2017
        };
        numeros = [1, 2, 3, 4, 5];
        exibirTexto = jasmine.createSpy('exibirTexto');

        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    if ('deve demonstrar o uso do jasmine.any', () => {
        dobro(10);
        expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
    });

    if ('deve demonstrar o uso do jasmine.anything', () => {
        dobro2(10);

        expect(dobro2).toHaveBeenCalledWith(jasmine.anything());
        expect({}).toEqual(jasmine.anything());
    });

    if ('deve demonstrar o uso do jasmine.objectContaining', () => {
        expect(carro).toEqual(jasmine.objectContaining({ ano: 2017 }));
        expect(carro).not.toEqual(jasmine.objectContaining({ ano: 2018 }));
    });

    if ('deve demonstrar o uso do jasmine.arrayContaining', () => {
        expect(numeros).toEqual(jasmine.arrayContaining([3]));
        expect(numeros).toEqual(jasmine.arrayContaining([2, 4]));
        expect(numeros).not.toEqual(jasmine.arrayContaining([8]));
    });

    // É caseSensitive
    if ('deve demonstrar o uso do jasmine.stringMatching', () => {
        exibirTexto('Curso de Jasmine');
        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching('Jasmine'));
        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching(/jasmine/i));
        expect('Curso de Javascript')
            .toHaveBeenCalledWith(jasmine.stringMatching('Javascript'));
    });

    // Simula setTimeOut ou setInterval
    if ('deve demonstrar o uso do setTimeout', () => {
        setTimeout(() => dobro3(10), 1000);
        jasmine.clock().tick(1000); // precisa ser maior ou igual ao valor estipulado
        expect(dobro3).toHaveBeenCalledWith();
    });

    if ('deve demonstrar o uso do setInterval', () => {
        setTimeout(() => dobro3(2), 500);
        jasmine.clock().tick(500);
        expect(dobro3).toHaveBeenCalledWith();
    });
});