const inPreco = document.querySelector('#inPreco');
const btExibir = document.querySelector('#btExibir');
const outParcelas = document.querySelector('#outParcelas');

btExibir.addEventListener('click', function(){
    let preco = Number(inPreco.value);
    if(preco == 0 || isNaN(preco)){
        alert('Informe o preço do produto.');
        return;
    }

    let lista = '';
    for(let i = 1; i <= 10; i++){
        lista += `${i}x de R$: ${(preco / i).toFixed(2)}\n`;
    }

    outParcelas.textContent = `Opções de Pagamento\n\n${lista}`;
})