const inNome = document.querySelector('#inNome');
const btGerar = document.querySelector('#btGerar');
const outSenha = document.querySelector('#outSenha');

function validarNome(){
    let nome = inNome.value;
    if(nome == '' || nome.indexOf('') == -1){
        alert('Preencha com o nome completo do Aluno');
        inNome.focus();
        return;
    }

    let sobrenome = obterSobrenome(nome);
    console.log(sobrenome);
    let vogais = contarVogais(nome);

    outSenha.textContent = `Senha Inicial: ${sobrenome + vogais}`;
}
btGerar.addEventListener('click', validarNome);

function obterSobrenome(nome){
    let partes = nome.split(' ');
    let sobrenome = partes[partes.length -1];
    return sobrenome.toLowerCase();
}

function contarVogais(nome){
    let nomeCompleto = nome.split(' ').join('').toLowerCase();
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let num = 0;
    for(let i = 0; i < nomeCompleto.length; i++){
        for(let j = 0; j < vogais.length; j++){
            if(nomeCompleto.charAt(i) == vogais[j]){
                num++;
            }
        }
    }

    let numVogais;
    if(num < 10){
        numVogais = '0' + num;
    } else{
        numVogais = num;
    }

    return numVogais;
}