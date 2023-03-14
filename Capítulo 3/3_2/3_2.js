function calcularPeso(){
    var inNome = document.querySelector("#inNome");
    var rbMasculino = document.querySelector("#rbMasculino");
    var rbFeminino = document.querySelector("#rbFeminino");
    var inAltura = document.querySelector("#inAltura");
    var outPeso = document.querySelector("#outPeso");

    var nome = inNome.value;
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked; 
    var altura = Number(inAltura.value);

    if(nome == "" || (masculino == false && feminino == false)){
        alert("Por favor, informe o nome e selecione o sexo...");
        inNome.focus();
        return;
    }

    if(altura == 0 || isNaN(altura)){
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return;
    }

    if(masculino){
        var peso = 22 * Math.pow(altura, 2);
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }

    outPeso.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + "kg";
}

var btCalcular = document.querySelector("#btCalcular");
btCalcular.addEventListener('click', calcularPeso);

function limparCampos(){
    location.reload();
    document.querySelector("#inNome").focus();
}

var btLimpar = document.querySelector("#btLimpar");
btLimpar.addEventListener('click', limparCampos);