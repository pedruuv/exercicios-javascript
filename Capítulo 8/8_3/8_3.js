const inProduto = document.querySelector('#inProduto');
const btnAdicionar = document.querySelector('#btnAdicionar');
const btnLimpar = document.querySelector('#btnLimpar');
const outLista = document.querySelector('#outLista');
const localStorageKey = 'lista-de-compras';

let lista = JSON.parse(localStorage.getItem(localStorageKey) || '[]');

function verificaProdutoRepetido(produtoAdicionado){
    let existe = lista.find(x => x.produtoAdicionado == produtoAdicionado);
    return !existe ? false : true;
}

function adicionarProdutos(){
    let produto = inProduto.value;
    if(!produto){
        alert('Insira um produto para adicionar a lista');
        inProduto.focus();
        return;
    } else if(verificaProdutoRepetido(produto)){
        alert('Esse produto já está na lista');
        inProduto.focus();
        return;
    }

    lista.push({ produtoAdicionado: produto });
    localStorage.setItem(localStorageKey, JSON.stringify(lista));
    inProduto.value = '';
    inProduto.focus();
    mostrarLista();
}
btnAdicionar.addEventListener('click', adicionarProdutos);

function mostrarLista(){
    if(!localStorage.getItem(localStorageKey)){
        outLista.innerHTML = '';
        return;
    }

    let lsProdutos = `Produtos Adicionados\n`;
    lsProdutos += `-------------------------------\n`;
    
    for(let i = 0; i < lista.length; i++){
        lsProdutos += `${lista[i].produtoAdicionado}\n`;
    }
    outLista.innerHTML = lsProdutos;
}

function limparLista(){
    if(confirm('Deseja limpar a lista?')){
        localStorage.removeItem(localStorageKey);
    }
    lista = JSON.parse(localStorage.getItem(localStorageKey) || '[]');
    mostrarLista();
}
btnLimpar.addEventListener('click', limparLista);

mostrarLista();
