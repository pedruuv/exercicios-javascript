function verificarPerfeito(){
    var inNum = document.querySelector("#inNum");
    var outDivisores = document.querySelector("#outDivisores");
    var outResposta = document.querySelector("#outResposta");

    var num = Number(inNum.value);
    if(num == 0 || isNaN(num)){
        alert("Digite um valor válido.");
        inNum.focus();
        return;
    }

    var soma = 1;
    var divisores = `Divisores do ${num}: 1`;
    for(var i = 2; i < num; i++){
        if(num % i == 0){
            divisores += `, ${i}`;
            soma += i;
        }
    }

    outDivisores.textContent = `${divisores} (Soma: ${soma})`;
    if(soma == num){
        outResposta.textContent = `${num} É um Número Perfeito`
    } else{
        outResposta.textContent = `${num} Não é um Número Perfeito` 
    }
}

var btVerificar = document.querySelector("#btVerificar");
btVerificar.addEventListener("click", verificarPerfeito);