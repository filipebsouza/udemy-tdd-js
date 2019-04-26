const Calculadora = {
    adicionar: (numero1, numero2) => {
        if (isNaN(numero1) || isNaN(numero2)) {
            return 0;
        }

        numero1 = parseFloat(numero1);
        numero2 = parseFloat(numero2);

        return numero1 + numero2;
    },

    subtrair: (numero1, numero2) => {
        if (isNaN(numero1) || isNaN(numero2)) {
            return 0;
        }

        return numero1 - numero2;
    },

    dividir: (numero1, numero2) => {
        if (isNaN(numero1) || isNaN(numero2)) {
            return 0;
        }

        if (numero2 == 0)
            return "Erro";

        return numero1 / numero2;
    },

    multiplicar: (numero1, numero2) => {
        if (isNaN(numero1) || isNaN(numero2)) {
            return 0;
        }
        
        return numero1 * numero2;
    }
}

if (typeof module !== undefined && typeof module.exports !== undefined) {
    module.exports = Calculadora;
}