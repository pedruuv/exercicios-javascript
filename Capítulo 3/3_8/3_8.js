function ladosTriangulo(){
    var inLadoA = document.querySelector("#inLadoA");
    var inLadoB = document.querySelector("#inLadoB");
    var inLadoC = document.querySelector("#inLadoC");
    var outExiste = document.querySelector("#outExiste");
    var outTipo = document.querySelector("#outTipo");

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    if(ladoA == 0 || isNaN(ladoA)){
        alert("Digite um valor válido.");
        inLadoA.focus();
        return;
    }
    if(ladoB == 0 || isNaN(ladoB)){
        alert("Digite um valor válido.");
        inLadoB.focus();
        return;
    }
    if(ladoC == 0 || isNaN(ladoC)){
        alert("Digite um valor válido.");
        inLadoC.focus();
        return;
    }

    if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
        outExiste.textContent = "Lados podem formar um Triângulo.";
        if(ladoA == ladoB && ladoB== ladoC){
            outTipo.textContent = "Tipo: Equilátero";
        } else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
            outTipo.textContent = "Tipo: Isósceles";
        } else if(ladoA != ladoB && ladoB != ladoC){
            outTipo.textContent = "Tipo: Escaleno";
        }
    } else{
        outExiste.textContent = "Lados não podem formar um Triângulo.";
    }


}

var btVerificar = document.querySelector("#btVerificar");
btVerificar.addEventListener("click", ladosTriangulo);
