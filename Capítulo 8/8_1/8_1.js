const rb = document.querySelectorAll('input[type=radio]')
const imgClube = document.querySelector("#imgClube");

function trocarClube() {
  let clube;
  if (rb[0].checked) {
    clube = "Brasil";
  } else if (rb[1].checked) {
    clube = "Pelotas";
  } else {
    clube = "Farroupilha";
  }

  localStorage.setItem('clube', clube);
}
rb.forEach(function(radio){
    radio.addEventListener('change', trocarClube);
});

function verificarClube() {
  if (localStorage.getItem('clube')) {
    let clube = localStorage.getItem('clube');
    if (clube == "Brasil") {
      rb[0].checked = true;
    } else if (clube == "Pelotas") {
      rb[1].checked = true;
    } else {
      rb[2].checked = true;
    }

    trocarClube();
  }
}
verificarClube();
