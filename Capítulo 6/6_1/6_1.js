const inNome = document.querySelector('#inNome');
const btGerar = document.querySelector('#btGerar');
const outCracha = document.querySelector('#outCracha');

function gerarCracha(){
    let nome = inNome.value;
    if(nome == '' || nome.indexOf(' ') == -1){
        alert('Preencha o campo com seu nome.');
        inNome.focus();
        return;
    }

    let tmp = nome.split(' ');
    let cracha = `${tmp[0]} ${tmp[tmp.length-1]}`

    outCracha.textContent = `Crachá: ${cracha}`;
}

btGerar.addEventListener('click', gerarCracha);