function preencherEspaco(){
    var inQuantidade = document.querySelector("#inQuantidade");
    var outEspaco = document.querySelector("#outEspaco");

    var quantidade = Number(inQuantidade.value);

    if(quantidade == 0 || isNaN(quantidade)){
        alert("Digite um valor válido");
        inQuantidade.focus();
        return;
    }

    var estrela = "";
    for(var i = 1; i <= quantidade; i++){
        if(i % 2 == 1){
            estrela += "*";
        } else{
            estrela += "-";
    } 
    }
    outEspaco.textContent = estrela;
}

var btPreencher = document.querySelector("#btPreencher");
btPreencher.addEventListener("click", preencherEspaco);