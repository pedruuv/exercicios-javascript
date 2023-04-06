const inModelo = document.querySelector("#inModelo");
const inPreco = document.querySelector("#inPreco");
const outModelo = document.querySelector("#outModelo");

let carros = [];

function adicionarCarros(){
    let modelo = inModelo.value;
    let preco = Number(inPreco.value);
    
    if(modelo == "" || preco == 0 || isNaN(preco)){
        alert("Informe corretamente os Dados");
        inModelo.focus();
        return;
    }

    carros.push({modelo: modelo, preco: preco});

    inModelo.value = "";
    inPreco.value = "";
    inModelo.focus();

    listarCarros();
}

const btAdicionar = document.querySelector("#btAdicionar");
btAdicionar.addEventListener("click", adicionarCarros);

function listarCarros(){
    if(carros.length == 0){
        alert("Não há carros na lista");
        return;
    }

    let lista = "";

    for(let i = 0; i < carros.length; i++){
        lista += carros[i].modelo + "- R$:" + carros[i].preco.toFixed(2) + "\n";
    }

    outModelo.textContent = lista;
}

const btListar = document.querySelector("#btListar");
btListar.addEventListener("click", listarCarros);

function filtrarCarros(){
    let maximo = Number(prompt("Digite o valor máximo que o cliente deseja pagar:"));

    if(maximo == 0 || isNaN(maximo)){
        return;
    }

    let lista = "";

    for(let i = 0; i < carros.length; i++){
        if(carros[i].preco <= maximo){
            lista += carros[i].modelo + "- R$:" + carros[i].preco.toFixed(2) + "\n";
        }
    }
    if(lista == ""){
        outModelo.textContent = `Não há carros com preço até R$ ${maximo.toFixed(2)}`;
    } else{
        outModelo.textContent = `Carros até R$ ${maximo.toFixed(2)}\n----------------------------------\n${lista}`;
    }
}

const btFiltrar = document.querySelector("#btFiltrar");
btFiltrar.addEventListener("click", filtrarCarros);