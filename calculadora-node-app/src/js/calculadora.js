const Calculadora = {
    ADICAO: '+',
    SUBTRACAO: '-',
    DIVISAO: '/',
    MULTIPLICACAO: '*',

    calcular: (numero1, numero2, operacao) => {
        let resultado = 0;

        numero1 = parseFloat(numero1);
        numero2 = parseFloat(numero2);

        if (isNaN(numero1) || isNaN(numero2)) {
            return 0;
        }

        switch (operacao) {
            case Calculadora.ADICAO:
                resultado = numero1 + numero2;
                break;
            case Calculadora.SUBTRACAO:
                resultado = numero1 - numero2;
                break;
            case Calculadora.DIVISAO:
                resultado = numero1 / numero2;
                break;
            case Calculadora.MULTIPLICACAO:
                resultado = numero1 * numero2;
                break;
            default:
                resultado = 0;
        }

        return resultado;
    },

    adicionar: (numero1, numero2) => {
        return Calculadora.calcular(numero1, numero2, Calculadora.ADICAO);
    },

    subtrair: (numero1, numero2) => {
        return Calculadora.calcular(numero1, numero2, Calculadora.SUBTRACAO);
    },

    dividir: (numero1, numero2) => {
        if (numero2 == 0)
            return "Erro";

        return Calculadora.calcular(numero1, numero2, Calculadora.DIVISAO);
    },

    multiplicar: (numero1, numero2) => {
        return Calculadora.calcular(numero1, numero2, Calculadora.MULTIPLICACAO);
    }
}

if (typeof module !== undefined && typeof module.exports !== undefined) {
    module.exports = Calculadora;
}