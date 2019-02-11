describe('Teste do toBeTruthy', function() {
    it('deve demonstrar o uso do toBeTruthy', function() {
        expect(false).not.toBeTruthy();     // não são considerados true        
        expect(0).not.toBeTruthy();         // não são considerados true    
        expect('').not.toBeTruthy();        // não são considerados true    
        expect(null).not.toBeTruthy();      // não são considerados true    
        expect(NaN).not.toBeTruthy();       // não são considerados true        
        
        expect(true).toBeTruthy();
    });
});