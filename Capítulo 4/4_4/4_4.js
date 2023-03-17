function verificarPrimo(){
    var inNum = document.querySelector("#inNum");
    var outResposta = document.querySelector("#outResposta");

    var numero = Number(inNum.value);
    if(numero == 0 || isNaN(numero)){
        alert("Digite um valor Válido");
        inNum.focus();
        return;
    }

    var temDivisor = 0;

    for(var i = 2; i <= numero/2; i++){
        if(numero % i == 0){
            temDivisor = 1;
            break;
        }
    }

    if(numero > 1 && !temDivisor){
        outResposta.textContent = numero + " É primo";
    } else {
        outResposta.textContent = numero + " Não é primo";
    }
}

var btVerificar = document.querySelector("#btVerificar");
btVerificar.addEventListener("click", verificarPrimo);