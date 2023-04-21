const inNome = document.querySelector('#inNome');
const inIdade = document.querySelector('#inIdade');
const btCategorizar = document.querySelector('#btCategorizar');
const outCategoria = document.querySelector('#outCategoria');

function dados(){
    let nome = inNome.value;
    let idade = Number(inIdade.value);
    if(nome == '' || idade == 0 || isNaN(idade)){
        alert('Preencha os Campos Corretamente');
        inNome.focus();
        return;
    }

    let tracos = retornarTracos(nome);
    let categoria = categorizarAluno(idade);

    outCategoria.textContent = `${nome}\n${tracos}\nCategoria: ${categoria}`;
}
btCategorizar.addEventListener('click', dados);

function categorizarAluno(idade){
    let categoria = (idade <= 12) ? 'Infantil' : (idade > 18) ? 'Adulto' : 'Juvenil';
    return categoria;
}

function retornarTracos(nome){
    let tracos = '';
    for(let i = 0; i < nome.length; i++){
        if(nome.charAt(i).match(/[a-z]/g) || nome.charAt(i).match(/[A-Z]/g)){
            tracos += '-';
        } else {
            tracos += ' ';
        }
    }
    return tracos;
}