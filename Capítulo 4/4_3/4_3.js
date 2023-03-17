var numContas = 0;
var valTotal = 0;

var resposta = "";

function registrarConta() {
  var inDescricao = document.querySelector("#inDescricao");
  var inValor = document.querySelector("#inValor");
  var outListaContas = document.querySelector("#outListaContas");
  var outTotalPagar = document.querySelector("#outTotalPagar");

  var descricao = inDescricao.value;
  var valor = Number(inValor.value);

  if (descricao == "" || valor == 0 || isNaN(valor)) {
    alert("Informe os dados corretamente.");
    inDescricao.focus();
    return;
  }

  numContas++;
  valTotal += valor;

  resposta += descricao + " -R$: " + valor.toFixed(2) + "\n";
  outListaContas.textContent = resposta + "-------------------------------";
  outTotalPagar.textContent =
    numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);

  inDescricao.value = "";
  inValor.value = "";
  inDescricao.focus();
}

var btRegistrar = document.querySelector("#btRegistrar");
btRegistrar.addEventListener("click", registrarConta);
