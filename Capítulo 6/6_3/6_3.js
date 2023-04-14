const inSenha = document.querySelector('#inSenha');
const btVerificar = document.querySelector('#btVerificar');
const outResposta = document.querySelector('#outResposta');

let erros = [];

function verificarSenha(){
    let senha = inSenha.value;

    if(senha.length < 8 || senha.length > 15){
        erros.push('possuir entre 8 e 15 caracteres');
    }

    if(senha.match(/[0-9]/g) == null){
        erros.push('possuir números (no mínimo, 1)');
    }
    if(!senha.match(/[a-z]/g)){
        erros.push('possuir letras minúsculas (no mínimo, 1)');
    }
    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1){
        erros.push('possuir letras maiúsculas (no mínimo, 2)');
    }
    if(!senha.match(/[\W|_]/g)){
        erros.push('possuir símbolos (no mínimo, 1)');
    }

    if(erros.length == 0){
        outResposta.textContent = "Senha Válida.";
    } else{
        outResposta.textContent = `Erro... A senha deve ${erros.join(', ')}`;
    }
}

btVerificar.addEventListener('click', verificarSenha);