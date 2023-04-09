const inNoticia = document.querySelector("#inNoticia");
const btAdicionar = document.querySelector('#btAdicionar');
const btListar = document.querySelector('#btListar');
const outNum = document.querySelector('#outNum');
const outNoticias = document.querySelector("#outNoticias");

let listaNoticias = [];
let cadastradas = 0;

function adicionarNoticias(){
    let noticia = inNoticia.value;

    if(noticia == ''){
        alert('Preencha o campo com uma notícia.');
        inNoticia.focus();
        return;
    }

    listaNoticias.push(noticia);

    cadastradas++;
    outNum.textContent = cadastradas;

    inNoticia.value = '';
    inNoticia.focus();
}
btAdicionar.addEventListener('click', adicionarNoticias);

function listarNoticias(){
    if(listaNoticias.length == 0){
        alert('Não há notícias na lista');
        return;
    }

    let noticiasListar = Number(prompt('Quantas notícias deseja visualizar?'));
    if(noticiasListar > listaNoticias.length){
        alert('O número deve ser menor ou igual ao nº de notícias cadastradas');
        return;
    }

    let lista = '';
    for(let i = 0; i < noticiasListar; i++){
        lista += `${listaNoticias.length - i}º ${listaNoticias[listaNoticias.length - (i+1)]}\n`;
    }
    outNoticias.textContent = `${noticiasListar} Últimas Notícias\n------------------------------------\n${lista}`;
}
btListar.addEventListener('click', listarNoticias);