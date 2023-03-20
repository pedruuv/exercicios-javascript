const inNum = document.querySelector("#inNum");
const outErros = document.querySelector("#outErros");
const outChances = document.querySelector("#outChances");
const outDica = document.querySelector("#outDica");
const btApostar = document.querySelector("#btApostar");
const btJogar = document.querySelector("#btJogar");

let erros = [];
let sorteado = Math.floor(Math.random() * 100)+ 1;

const CHANCES = 6;

function apostarNumero(){
    let num = Number(inNum.value);
    
    if(num <= 0 || num > 100 || isNaN(num)){
        alert("Digite um valor válido.");
        inNum.focus();
        return;
    }
    if(num == sorteado){
        outDica.textContent = `Parabéns!! Você Acertou!!!`;
        btApostar.disabled = true;
        btJogar.className = "exibe";
    } else{
        if(erros.indexOf(num) >= 0){
            alert(`Você já apostou o número ${num}. Tente outro...`);
        } else{
            erros.push(num);
            let numErros = erros.length;
            let numChances = CHANCES - numErros;
            outErros.textContent = `${numErros} (${erros.join(", ")})`;
            outChances.textContent = numChances;
            if(numChances == 0){
                alert("Suas chances acabaram...");
                btApostar.disabled = true;
                btJogar.className = "exibe";
                outDica.textContent = `Game Over!! Número sorteado: ${sorteado}`;
            } else{
                let dica = num < sorteado ? "maior" : "menor";
                outDica.textContent = `Dica: Tente um número ${dica} que ${num}`;
            }
        } 
    }

    inNum.value = "";
    inNum.focus();
}

btApostar.addEventListener("click", apostarNumero);

function jogarNovamente(){
    location.reload();
}
btJogar.addEventListener("click", jogarNovamente);