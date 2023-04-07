const inNome = document.querySelector("#inNome");
const inNum = document.querySelector("#inNum");
const btAdicionar = document.querySelector("#btAdicionar");
const btListar = document.querySelector("#btListar");
const btAprovados = document.querySelector("#btAprovados");
const outLista = document.querySelector("#outLista");

let todosCandidatos = [];

function adicionarCandidatos(){
    let nome = inNome.value;
    let numeroDeAcertos = Number(inNum.value);

    if(nome == '' || numeroDeAcertos == '' || isNaN(numeroDeAcertos)){
        alert('Complete os campos corretamente');
        inNome.focus();
        return;
    }

    todosCandidatos.push({nome: nome, acertos: numeroDeAcertos});

    listarCandidatos();
    inNome.value = '';
    inNum.value = '';
    inNome.focus();
}

btAdicionar.addEventListener('click', adicionarCandidatos);

function listarCandidatos(){
    if(todosCandidatos.length == 0){
        alert('Não há candidatos na lista!');
        return;
    }

    let lista = '';

    for(let i = 0; i < todosCandidatos.length; i++){
        lista += `${todosCandidatos[i].nome} - ${todosCandidatos[i].acertos} acertos\n`;
    }

    outLista.textContent = lista;
}

btListar.addEventListener('click', listarCandidatos);

function listarAprovados(){
    if(todosCandidatos.length == 0){
        alert('Não há candidatos na lista!');
        return;
    }

    let acertosParaAprovacao = Number(prompt('Número de Acertos para Aprovação:'));

    let aprovados = '';
    let copia = todosCandidatos.slice();
    copia.sort(function(a,b){return a.acertos - b.acertos});

    for(let i = 0; i < todosCandidatos.length; i++){
        if(copia[i].acertos >= acertosParaAprovacao){
            aprovados += `${copia[i].nome} - ${copia[i].acertos} acertos\n`;
        }
    }
    outLista.textContent = aprovados;
}

btAprovados.addEventListener('click', listarAprovados);