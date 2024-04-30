let inOut: number = 0;

function realizarOperacao(operador: string, numeroUm: number, numeroDois: number): number {
    let resultado: number = 0;
    switch (operador) {
        case '+':
            resultado = numeroUm + numeroDois;
            console.log(`O valor da soma de ${numeroUm} com ${numeroDois} é ${resultado}`);
            break;
        case '-':
            resultado = numeroUm - numeroDois;
            console.log(`O valor da subtração de ${numeroUm} com ${numeroDois} é ${resultado}`);
            break;
        case '*':
            resultado = numeroUm * numeroDois;
            console.log(`O valor da multiplicação de ${numeroUm} com ${numeroDois} é ${resultado}`);
            break;
        case '/':
            if (numeroDois !== 0) {
                resultado = numeroUm / numeroDois;
                console.log(`O valor da divisão de ${numeroUm} com ${numeroDois} é ${resultado}`);
            } else {
                console.log("Não é possível dividir por zero!");
            }
            break;
        default:
            console.log("Operação inválida!");
    }
    return resultado;
}

do {
    const teclado = require(`prompt-sync`)();

    console.log(`Qual operação deseja? Digite: `);
    console.log(`+ --> Adição`);
    console.log(`- --> Subtração`);
    console.log(`* --> Multiplicação`);
    console.log(`/ --> Divisão`);
    console.log(`s --> Sair`);

    let opcao = teclado(`Digite a opção desejada: `);

    if (opcao !== 's') {
        let numeroUm: number = parseInt(teclado(`Digite o 1º número: `));
        let numeroDois: number = parseInt(teclado(`Digite o 2º número: `));

        realizarOperacao(opcao, numeroUm, numeroDois);
    }

    console.log(`Para continuar digite`);
    console.log(`0 - Sair`);
    console.log(`1 - Continuar`);
    inOut = parseInt(teclado(`Digite a opção: `));

} while (inOut !== 0);

console.log(`Fim do programa...`);