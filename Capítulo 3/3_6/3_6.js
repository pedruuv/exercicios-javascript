function parOuImpar(){
    var inNum = document.querySelector("#inNum");
    var outResposta = document.querySelector("#outResposta");
    var num = Number(inNum.value);

    if(isNaN(num)){
        alert("Digite um número!");
        isNum.focus();
        return;
    }
    var parImpar = num % 2;
    if(parImpar == 0){
        outResposta.textContent = "Resposta: " + num + " é Par";
    } else{
        outResposta.textContent = "Resposta: " + num + " é Ímpar";
    }
}

var btVerificar = document.querySelector("#btVerificar");
btVerificar.addEventListener("click", parOuImpar);