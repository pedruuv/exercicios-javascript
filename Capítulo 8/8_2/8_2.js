const inNome = document.querySelector('#inNome');
const inPeso = document.querySelector('#inPeso');
const btnApostar = document.querySelector('#btnApostar');
const btnVencedor = document.querySelector('#btnVencedor');
const btnLimpar = document.querySelector('#btnLimpar');
const outApostas = document.querySelector('#outApostas');
const LocalStorageKey = 'apostas';

let apostas = JSON.parse(localStorage.getItem(LocalStorageKey) || "[]");

function verificarAposta(pesoApostado){
    let existe = apostas.find(x => x.pesoApostado == pesoApostado);
    return !existe ? false : true;
}

function adicionarAposta(){
    let nome = inNome.value;
    let peso = Number(inPeso.value);

    if(!nome || peso == 0 || isNaN(peso)){
        alert('Informe os dados corretamente');
        inNome.focus();
        return;
    } else if(verificarAposta(peso)){
        alert('Alguém já apostou este peso, informe outro...');
        inPeso.focus();
        return;
    }

    apostas.push({nomeApostador: nome, pesoApostado: peso});
    localStorage.setItem(LocalStorageKey, JSON.stringify(apostas));
    mostrarApostas();
    inNome.value = '';
    inPeso.value = '';
    inNome.focus();
}
btnApostar.addEventListener('click', adicionarAposta);

function mostrarApostas(){
    if(!localStorage.getItem(LocalStorageKey)){
        outApostas.innerHTML = '';
        return;
    }
    
    let linhas = '';
    for(let i = 0; i < apostas.length; i++){
        linhas += `${apostas[i].nomeApostador} - ${apostas[i].pesoApostado}gr\n`;
    }
    outApostas.innerHTML = linhas;
}

mostrarApostas();

function verificarVencedor(){
    if(!localStorage.getItem(LocalStorageKey)){
        alert('Não há apostas cadastradas');
        return;
    }

    let pesoCorreto = Number(prompt('Qual o peso correto da melancia?'));

    if(pesoCorreto == 0 || isNaN(pesoCorreto))return;

    let nomes = apostas.map(nome => nome['nomeApostador']);
    console.log(nomes);
    let pesos = apostas.map(peso => peso['pesoApostado']);

    let vencedorNome = nomes[0];
    let vencedorPeso = pesos[0];

    for(let i = 1; i < apostas.length; i++){
        difVencedor = Math.abs(vencedorPeso - pesoCorreto);
        difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

        if(difAposta < difVencedor){
            vencedorNome = nomes[i];
            vencedorPeso = pesos[i];
        }
    }

    let mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr`;
    mensagem +='\n--------------------------------------------';
    mensagem += '\nVencedor: ' + vencedorNome;
    mensagem += '\nAposta: ' + vencedorPeso + 'gr';
    alert(mensagem);
}
btnVencedor.addEventListener('click', verificarVencedor);


function limparApostas(){
    if(confirm('Corfimar exclusão de todas as apostas?')){
        localStorage.removeItem(LocalStorageKey);
    }
    apostas = JSON.parse(localStorage.getItem(LocalStorageKey) || "[]");
    mostrarApostas();
}
btnLimpar.addEventListener('click', limparApostas);