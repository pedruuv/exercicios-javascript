const inNum = document.querySelector("#inNum");
const btAdicionar = document.querySelector("#btAdicionar");
const btVerificar = document.querySelector("#btVerificar");
const outNum = document.querySelector("#outNum");
const outOrdem = document.querySelector("#outOrdem");

let numeros = [];

function adicionarNumeros(){
    let num = Number(inNum.value);
    if(isNaN(num) || numeros.indexOf(num) >= 0 || inNum.value == 0){
        alert("Digite um número!!");
        inNum.focus();
        return;
    }

    numeros.push(num);
    let lista = '';
    let primeiroNumero = numeros[0];

    for(let i = 1; i < numeros.length; i++){
        lista += `, ${numeros[i]}`;
    }

    outNum.textContent = `Números: ${primeiroNumero}${lista}`;

    inNum.value = '';
    inNum.focus();

}
btAdicionar.addEventListener("click", adicionarNumeros);

function verificarOrdem(){
    if(numeros.length <= 1){
        alert("Insira mais números para ser possível verificar a ordem!!");
        inNum.focus();
        return;
    }

    let copia = numeros.slice();

    copia.sort(function(a,b){return a - b});

    let resposta = '';

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] == copia[i]){
            outOrdem.textContent = `Os números estão em ordem crescente`;
        } else {
            outOrdem.textContent = `Atenção... Números não estão em ordem crescente`;
        }
    }
}

btVerificar.addEventListener("click", verificarOrdem);
