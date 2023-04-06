const inNome = document.querySelector("#inNome");
const inIdade = document.querySelector("#inIdade");
const outNomes = document.querySelector("#outNomes");

let criancas = [];

function adicionarCriancas() {
  let nome = inNome.value;
  let idade = Number(inIdade.value);

  if (nome == "" || idade == 0 || isNaN(idade)) {
    alert("Complete os campos corretamente");
    inNome.focus();
    return;
  }
  criancas.push({ nome: nome, idade: idade });

  inNome.value = "";
  inIdade.value = "";
  inNome.focus();

  listarCriancas();
}

const btAdicionar = document.querySelector("#btAdicionar");
btAdicionar.addEventListener("click", adicionarCriancas);

function listarCriancas() {
  if (criancas.length == 0) {
    alert("Não há crianças.");
    return;
  }

  let lista = "";

  for (let i = 0; i < criancas.length; i++) {
    lista += criancas[i].nome + " - " + criancas[i].idade + " anos\n";
  }

  outNomes.textContent = lista;
}

const btListar = document.querySelector("#btListar");
btListar.addEventListener("click", listarCriancas);

function resumirLista() {
  if (criancas.length == 0) {
    alert("Não há crianças.");
    return;
  }
  let cpcriancas = criancas.slice();

  cpcriancas.sort(function (a, b) {
    return a.idade - b.idade;
  });

  let resumo = "";

  let aux = cpcriancas[0].idade;
  let nomes = [];

  for (let i = 0; i < cpcriancas.length; i++) {
    if (cpcriancas[i].idade == aux) {
      nomes.push(cpcriancas[i].nome);
    } else {
      resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
      resumo += ((nomes.length / cpcriancas.length) * 100).toFixed(2) + "%\n";
      resumo += "(" + nomes.join(", ") + ")\n\n";

      aux = cpcriancas[i].idade;
      nomes = [];
      nomes.push(cpcriancas[i].nome);
    }
  }

  resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
  resumo += (nomes.length / cpcriancas.length * 100).toFixed(2) + "%\n";
  resumo += "(" + nomes.join(", ") + ")\n\n";
  
  outNomes.textContent = resumo;
}

const btResumir = document.querySelector("#btResumir");
btResumir.addEventListener("click", resumirLista);
