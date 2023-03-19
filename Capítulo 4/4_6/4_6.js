function repeteFruta(){
    var inFruta = document.querySelector("#inFruta");
    var inNum = document.querySelector("#inNum");
    var outRepeticao = document.querySelector("#outRepeticao");

    var fruta = inFruta.value;
    var num = Number(inNum.value);

    if(fruta == "" || num == 0 || isNaN(num)){
        alert("Insira dados válidos.");
        inFruta.focus();
        return;
    }

    var resposta = "";

    for(var i = 1; i <= num; i++){
        if(i == num){
            resposta += fruta;
        } else{
            resposta += fruta + " * ";
        }
    }
    outRepeticao.textContent = resposta;
}

var btRepeticao = document.querySelector("#btRepeticao");
btRepeticao.addEventListener("click", repeteFruta);