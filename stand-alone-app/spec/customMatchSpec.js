const emailMatcher = {
    toBeValidEmail: (util, customEqualityTesters) => {
        const emailRegex = /\S+@\S+\.\S+/;
        return {
            compare: (actual, expected) => {
                let result = {};
                if (expected === undefined) {
                    result.pass = emailRegex.test(actual);
                } else {
                    result.pass = expected.test(actual);
                }

                if (result.pass) {
                    result.message = `${actual} é um e-mail válido`;
                } else {
                    result.message = `${actual} não é um e-mail válido`;
                }

                return result;
            }
        }
    }
};

describe('Testes do objeto jasmine.addMatchers', () => {
    beforeAll(() => {
        jasmine.addMatchers(emailMatcher);
    });

    it('deve validar se um e-mail é válido', () => {
        expect('email@email.com').toBeValidEmail();
        expect('asdasd').not.toBeValidEmail();
    })
});