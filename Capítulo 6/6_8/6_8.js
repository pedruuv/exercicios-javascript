const inData = document.querySelector('#inData');
const inValor = document.querySelector('#inValor');
const btCalcular = document.querySelector('#btCalcular');
const outData = document.querySelector('#outData');
const outValor = document.querySelector('#outValor');

const DESCONTO = 0.80;

function calcularDataLimiteValor(){
    let data = inData.value;
    let valor = Number(inValor.value);

    if(data == '' || valor == 0 || isNaN(valor)){
        alert('Informe os dados corretamente.');
        inData.focus();
        return;
    }

    let dataVencimento = new Date(data);
    dataVencimento.setDate(dataVencimento.getDate() + 90);
    let dataFormatada = `${dataVencimento.getDate()}/${dataVencimento.getMonth()}/${dataVencimento.getFullYear()}`;

    let valorComDesconto = valor * DESCONTO;

    outData.textContent = `Data Limite para Pagar com Desconto: ${dataFormatada}`;
    outValor.textContent = `Valor com Desconto R$: ${valorComDesconto.toFixed(2)}`;
}
btCalcular.addEventListener('click', calcularDataLimiteValor);