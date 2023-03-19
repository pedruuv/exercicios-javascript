function preverNumChinchilas() {
  var inNumChinchilas = document.querySelector("#inNumChinchilas");
  var inNumAnos = document.querySelector("#inNumAnos");
  var outPrevisao = document.querySelector("#outPrevisao");

  var chinchilas = Number(inNumChinchilas.value);
  var anos = Number(inNumAnos.value);

  if (anos == 0 || isNaN(anos) || chinchilas <2 || isNaN(chinchilas)) {
    alert("Digite valores válidos.");
    inNumChinchilas.focus();
    return;
  }

  var resposta = "";
  var totalChinchilas = chinchilas;
  for (var i = 1; i <= anos; i++) {
    resposta += `${i}º Ano: ${totalChinchilas} Chinchilas\n`;
    totalChinchilas *= 3;
  }
  outPrevisao.textContent = resposta;
}

var btPrevisao = document.querySelector("#btPrevisao");
btPrevisao.addEventListener("click", preverNumChinchilas);
