let operacaoAtual;
let operacao;
let resultado;
let operador;


function adicionaNumero(numero) {
    operacaoAtual += numero;
    atualizarTela(operacaoAtual);
}

function adicionaOperacao(operacao) {
    if (operacaoAtual !== '') {
        operador = operacao;
        operacaoAtual += operacao;
        atualizarTela(operacaoAtual);
    }
}

function calcular() {
    try {
        resultado = eval(operacaoAtual);
        atualizarTela(resultado);
        operacaoAtual = resultado.toString();
    } catch (e) {
        atualizarTela('erro');
        operacaoAtual = '';
    }
}

function limpar() {
    operacaoAtual = '';
    operador = '';
    resultado = 0;
    atualizarTela(0);
}

function atualizarTela(valor) {
    document.getElementById('resultado').innerHTML = valor;
}
