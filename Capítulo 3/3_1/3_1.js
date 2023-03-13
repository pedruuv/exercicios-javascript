function calcularMedia() {
  var inNome = document.querySelector("#inNome");
  var inN1 = document.querySelector("#inN1");
  var inN2 = document.querySelector("#inN2");
  var outMedia = document.querySelector("#outMedia");
  var outSituacao = document.querySelector("#outSituacao");

  var nome = inNome.value;
  var n1 = Number(inN1.value);
  var n2 = Number(inN2.value);

  var media = (n1 + n2) / 2;
  outMedia.textContent = "Média das Notas: " + media.toFixed(1);

  if (media >= 7.0) {
    outSituacao.textContent = "Parabéns, " + nome + "! Você foi aprovado(a)";
    outSituacao.style.color = "blue";

  } else {
    outSituacao.textContent = "Poxa, " + nome + ". Você foi reprovado(a)";
    outSituacao.style.color = "red";
  }
}

var btMedia = document.querySelector("#btMedia");
btMedia.addEventListener("click", calcularMedia);
