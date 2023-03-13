function calcularvalorPagar(){
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outValor = document.getElementById("outValor");

    var valor = Number(inValor.value);
    var tempo = Number(inTempo.value);

    var valorPagar = Math.ceil(tempo / 15) * valor;
    outValor.textContent = "Valor a Pagar R$: " + valorPagar.toFixed(2);
}

var btCalculaValor = document.getElementById("btCalculaValor");
btCalculaValor.addEventListener('click', calcularvalorPagar);