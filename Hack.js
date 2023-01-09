var qntidade = document.querySelector("#impressao")



function instrucao(qual){
    document.querySelector("#msg").innerHTML = qual;
}

    //Função para sumir com entrada e botao caso o usuario acerte
function block(){
    document.querySelector("#btn").setAttribute("style", "display:none")
    document.querySelector("#entrada").setAttribute("style", "display:none")

}

    //Maquinario do joguinho
function jogo(fase){
    console.log(fase);
        //impressao de erros na telinha xablau
    qntidade.innerHTML = i

    if(fase === 1){
        instrucao("Você deve adivinhar o número que vou pensar...")
    }else if(fase === 2){
        instrucao("Estou pensando em um número de 1 a 50!");
        numero = Math.floor(Math.random()*50)+1
    }else if (fase === 3){
        instrucao("Tente adivinhar");
        document.querySelector("#entrada").setAttribute("style", "display:block")
        var sttTent = document.querySelector("#status").setAttribute("style", "display:true")
        i++
    }else{
        var tentativa = document.querySelector("#entrada").value
        
        if(tentativa == numero){
            instrucao("Parabéns! voce acertou!\n" + "O número secreto é: " + numero );
            setInterval(instrucao, 5000, "...")
            block()
            rest.setAttribute("style", "display:true")
        }else if(tentativa < numero){
            instrucao("O número é muito baixo...")
            setInterval(instrucao, 3000, "...")
            i++
        }else if(tentativa > numero){
            instrucao("O número é muito alto...")
            setInterval(instrucao, 3000, "...")
            i++
        }
    }
}

    //variaveis funcionais
var i = 0
var fase = 0;
var numero;

    //função usando fases pra simplificar
document.querySelector("#btn").onclick = function(){
    fase = fase+1;
    jogo(fase);
}


