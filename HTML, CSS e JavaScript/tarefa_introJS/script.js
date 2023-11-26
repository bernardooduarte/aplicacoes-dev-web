function fibonacci(n) {

    if (n <= 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function calcularSoma(x) {

    let soma = 0;

    for (let i = 0; i < x; i++) {
        soma += fibonacci(i);
    }

    return soma;
}

function calcularPrimos(n) {

    let num = fibonacci(n);

    for (let i = 2; i < num; i++) {

        if ((num % 1 === 0)) {
            return calcularPrimos(n - 1);
        }
    }

    return num;
}

function resultado() {

    let x = window.prompt('Insira um termo:');
    let resultado_soma = calcularSoma(x);
    let resultado_primos = calcularPrimos(x);

    window.alert('A soma dos ' + x + ' primeiros termos dá ' + resultado_soma + ' e os números primos são ' + resultado_primos);

}