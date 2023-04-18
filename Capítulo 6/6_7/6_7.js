const inFrase = document.querySelector('#inFrase');
const btVerificar = document.querySelector('#btVerificar');
const outResposta = document.querySelector('#outResposta');

function verificarPalindromo(){
    let frase = inFrase.value.toLowerCase();
    if(frase == ''){
        alert('Insira uma frase');
        inFrase.focus();
        return;
    }
    let fraseSemEspaco = frase.split(' ').join('')
    let fraseInvertida = fraseSemEspaco.split('').reverse().join('');

    let resposta = '';
    if(fraseSemEspaco == fraseInvertida){
        resposta = `é um Palíndromo`;
    } else{
        resposta = `não é um Palíndromo`;
    }

    outResposta.textContent = `${frase.toUpperCase()} ${resposta}`;
}

btVerificar.addEventListener('click', verificarPalindromo);