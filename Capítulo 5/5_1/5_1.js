const inNome = document.querySelector("#inNome");
const outAtendimento = document.querySelector("#outAtendimento");
const outListaPacientes = document.querySelector("#outListaPacientes");
const btAdicionar = document.querySelector("#btAdicionar");
const btUrgencia = document.querySelector("#btUrgencia");
const btAtender = document.querySelector("#btAtender");
let pacientes = [];

function adicionarPaciente() {
  let paciente = inNome.value;

  if (paciente == "") {
    alert("Preencha corretamente");
    inNome.focus();
    return;
  }
  pacientes.push(paciente);
  let lista = "";

  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]}\n`;
  }
  outListaPacientes.textContent = lista;

  inNome.value = "";
  inNome.focus();
  return;
}
btAdicionar.addEventListener("click", adicionarPaciente);

function urgenciaPaciente() {
  let paciente = inNome.value;

  if (paciente == "") {
    alert("Preencha corretamente");
    inNome.focus();
    return;
  }
  pacientes.unshift(paciente);
  let lista = "";

  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]}\n`;
  }
  outListaPacientes.textContent = lista;

  inNome.value = "";
  inNome.focus();
  return;
}

btUrgencia.addEventListener("click", urgenciaPaciente);

function atenderPacientes() {
  if (pacientes.length == 0) {
    alert("Não há pacientes na lista de espera");
    inNome.focus();
    return;
  }
  let atender = pacientes.shift();
  outAtendimento.textContent = atender;
  let lista = "";

  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]}\n`;
  }
  outListaPacientes.textContent = lista;

  inNome.value = "";
  inNome.focus();
  return;
}

btAtender.addEventListener("click", atenderPacientes);
