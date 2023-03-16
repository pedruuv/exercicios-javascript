function decrescer() {
  var inNum = document.querySelector("#inNum");
  var outNum = document.querySelector("#outNum");

  var numero = Number(inNum.value);
  if (numero == 0 || isNaN(numero)) {
    alert("Digite um valor válido");
    inNum.focus();
    return;
  }

  var resposta = "Entre " + numero + " 1: ";

  for (var i = numero; i > 1; i--) {
    resposta += i + ",  ";
  }
  resposta += i + ".";
  outNum.textContent = resposta;
}

var btDecrescer = document.querySelector("#btDecrescer");
btDecrescer.addEventListener("click", decrescer);
