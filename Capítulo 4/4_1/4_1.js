function tabuada(){
    var inNum = document.querySelector("#inNum");
    var outTabuada = document.querySelector("#outTabuada");

    var numero = Number(inNum.value);
    if(isNaN(numero)){
        alert("Digite um número:");
        inNum.focus();
        return;
    }
    var resposta = "";

    for(var i = 1; i<=10; i++){
        resposta += numero + " x " + i + " = " + numero * i + '\n'; 
    }
    outTabuada.textContent = resposta;
}

var btTabuada = document.querySelector("#btTabuada");
btTabuada.addEventListener("click", tabuada);
