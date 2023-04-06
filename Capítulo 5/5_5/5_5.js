const inClube = document.querySelector("#inClube");
const outLista = document.querySelector("#outLista");

let clubes = [];

function adicionarClubes(){
    let clube = inClube.value;
    
    if(clube == ""){
        alert("Insira o nome de um clube");
        inClube.focus();
        return;
    }

    clubes.push(clube);

    inClube.value = "";
    inClube.focus();

    listarClubes();
}

const btAdicionar = document.querySelector("#btAdicionar");
btAdicionar.addEventListener("click", adicionarClubes);

function listarClubes(){
    if(clubes.length == 0){
        alert("Não há clubes na lista.");
        return;
    }

    let lista = "";
    let contador = 1;

    for(let i = 0; i < clubes.length; i++){
        lista += `${contador}. ${clubes[i]}\n`;
        contador++;
    }

    outLista.textContent = lista;
}

const btListar = document.querySelector("#btListar");
btListar.addEventListener("click", listarClubes);

function montarTabela(){
    if(clubes.length % 2 != 0 || clubes.length == 0){
        alert("Não é possível montar a tabela, adicione mais clubes!");
        inClube.focus();
        return;
    }

    let jogos = "";;
    let numeroDeJogos = (clubes.length - 1) / 2;


    for(let i = 0; i < numeroDeJogos; i++){
        let ultimoClube = clubes[clubes.length - (i+1)];
        jogos += `${clubes[i]} x ${ultimoClube}\n`;
    }


     outLista.textContent = jogos;
}

const btMontar = document.querySelector("#btMontar");
btMontar.addEventListener("click", montarTabela);