function calcularHoras(){
    var inHora = document.querySelector("#inHora");
    var outHoraFranca = document.querySelector("#outHoraFranca");

    var hora = Number(inHora.value);

    if(hora == "" || isNaN(hora)){
    alert("Informe a hora no Brasil corretamente");
    inHora.focus();
    return
    }

    var fuso = hora + 5;
    if(fuso > 24){
        fuso -= 24;
    }

    outHoraFranca.textContent = "Hora na França: " + fuso.toFixed(2);
}

var btHoraFranca = document.querySelector("#btHoraFranca");
btHoraFranca.addEventListener('click', calcularHoras);