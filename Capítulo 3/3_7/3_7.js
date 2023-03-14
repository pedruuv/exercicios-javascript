function verificarVelocidade(){
    var inVelocidadeP = document.querySelector("#inVelocidadeP");
    var inVelocidadeC = document.querySelector("#inVelocidadeC");
    var outSituacao = document.querySelector("#outSituacao");

    var velocidadePermitida = Number(inVelocidadeP.value);
    var velocidadeCondutor = Number(inVelocidadeC.value);
    
    if(velocidadePermitida == 0 || isNaN(velocidadePermitida)){
        alert("Digite um valor válido:");
        inVelocidadeP.focus();
        return;
    }
    if(velocidadeCondutor == 0 || isNaN(velocidadeCondutor)){
        alert("Digite um valor válido:");
        inVelocidadeC.focus();
        return;
    }
    if(velocidadeCondutor<= velocidadePermitida){
        outSituacao.textContent = "Situação: Sem Multa";
    } else if(velocidadeCondutor <= (0.20 * velocidadePermitida) + velocidadePermitida){
        outSituacao.textContent = "Situação: Multa Leve";
    } else{
        outSituacao.textContent = "Situação: Multa Grave";
    }
}

var btVerificar = document.querySelector("#btVerificar");
btVerificar.addEventListener("click", verificarVelocidade);