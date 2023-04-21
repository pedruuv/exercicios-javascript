const inModelo = document.querySelector('#inModelo');
const inAno = document.querySelector('#inAno');
const inPreco = document.querySelector('#inPreco');
const btClassificar = document.querySelector('#btClassificar');
const outClassificacao = document.querySelector('#outClassificacao');
const outPreco = document.querySelector('#outPreco');

function mostrarDados(){
    let modelo = inModelo.value;
    let ano = Number(inAno.value);
    let preco = Number(inPreco.value);

    if(modelo == '' || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)){
        alert('Preencha os campos corretamente.');
        inModelo.focus();
        return;
    }

    let classificacao = classificarVeiculo(ano);
    let precoVenda = calcularPrecoVenda(preco, classificacao);

    outClassificacao.textContent = `${modelo} - ${classificacao}`;
    outPreco.textContent = `Preço de Venda R$: ${precoVenda.toFixed(2)}`;
}
btClassificar.addEventListener('click', mostrarDados);

function classificarVeiculo(ano){
    let anoAtual = new Date().getFullYear();
    let classificacao;

    if(ano == anoAtual){
        classificacao = 'Novo';
    } else if(ano == anoAtual -1 || ano == anoAtual -2){
        classificacao = 'Seminovo';
    } else{
        classificacao = 'Usado';
    }
    return classificacao;
}

function calcularPrecoVenda(preco, classificacao){
    let prVenda = (classificacao == 'Novo') ? preco * 1.08 : preco * 1.10;
    return prVenda;
}