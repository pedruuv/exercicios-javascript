const inValor = document.querySelector("#inValor");
const rbSim = document.querySelector("#sim");
const rbNao = document.querySelector("#nao");
const inConvenio = document.querySelector("#inConvenio");
const opcoes = document.querySelector('#opcoes');
const btCalcular = document.querySelector("#btCalcular");
const outDesconto = document.querySelector("#outDesconto");
const outValor = document.querySelector("#outValor");

function trocarOpcoes() {
  if (rbNao.checked) {
    inConvenio.className = "oculta";
  } else {
    inConvenio.className = "exibe";
    opcoes.className = 'exibe';
  }
}
rbSim.addEventListener("change", trocarOpcoes);
rbNao.addEventListener("change", trocarOpcoes);

function receberDados() {
  let valor = Number(inValor.value);

  if(valor == 0 || isNaN(valor)){
    alert('Insira um valor.');
    inValor.focus();
    return;
  }
    let taxa;
    if(rbNao.checked){
        taxa = 0.1;
    } else{
        let num = inConvenio.selectedIndex;
        if(num == 0){
            taxa = 0.2;
        } else{
            taxa = 0.5;
        }
        }

  let desconto = calcularDesconto(valor, taxa);
  let pagar = valor - desconto;

  outDesconto.textContent = `Desconto R$: ${desconto.toFixed(2)}`;
  outValor.textContent = `A Pagar R$: ${pagar.toFixed(2)}`;
}
btCalcular.addEventListener('click', receberDados);

function calcularDesconto(valor, taxa){
    let valorConsulta = valor * taxa;
    return valorConsulta;
}
