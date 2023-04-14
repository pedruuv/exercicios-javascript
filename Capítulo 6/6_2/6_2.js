const inNome = document.querySelector("#inNome");
const btGerar = document.querySelector("#btGerar");
const outEmail = document.querySelector("#outEmail");

function gerarEmail() {
  let nome = inNome.value;

  if (nome == '' || nome.indexOf(' ') == -1) {
    alert("Preencha o campo com o nome completo do funcionário");
    inNome.focus();
    return;
  }

  let partes = nome.split(' ');
  let email = '';
  let tamanho = partes.length;

  for (let i = 0; i < tamanho - 1; i++) {
    email += partes[i].charAt(0);
  }
  email += `${partes[tamanho - 1]}@empresa.com.br`;

  outEmail.textContent = `Email: ${email.toLowerCase()}`;
}

btGerar.addEventListener("click", gerarEmail);
