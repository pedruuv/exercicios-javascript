function mostrarPromocao(){
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outMedicamento = document.getElementById("outMedicamento");
    var outPromocao = document.getElementById("outPromocao");

    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);
    var promocao = Math.floor(preco * 2);

    outMedicamento.textContent = "Promoção de " + medicamento;
    outPromocao.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2);
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener('click', mostrarPromocao);