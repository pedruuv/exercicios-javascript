function calcularRaizQuadrada(){
    var inNum = document.querySelector("#inNum");
    var outRaiz = document.querySelector("#outRaiz");

    var num = Number(inNum.value);
    if(num == 0 || isNaN(num)){
        alert("Digite um número válido");
        inNumero.focus();
        return;
    }

    var raiz = Math.sqrt(num);
    if(raiz == Math.floor(raiz)){
        outRaiz.textContent = "Raiz: " + raiz;
    } else{
        outRaiz.textContent = "Não há raiz exata para " + num;
    }
}

var btExibir = document.querySelector("#btExibir");
btExibir.addEventListener('click', calcularRaizQuadrada);