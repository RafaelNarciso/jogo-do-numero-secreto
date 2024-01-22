let listaDeNumerosSorteados =[];
let numeroLimite = 3;
let numeroSecreto = gerarNumerosAletorios();
let tentativas = 1;


function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese female',{rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','jogo do numero secreto');
    exibirTextoNaTela('p','escolha um número de 1 a ' + numeroLimite);
}

exibirMensagemInicial();



function verificarChute(){

    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'ACERTOU !!! ');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagens = `Você descobriu o número secreto ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagens );
        document.getElementById('reiniciar').removeAttribute('disabled');


    }else{ 

        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto e menor !!');
        }else{
            exibirTextoNaTela('p', 'O número secreto maior !! ');
        }
        tentativas++;
        limparCampo();
    }
}




function gerarNumerosAletorios(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite ){
        listaDeNumerosSorteados = []
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumerosAletorios();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}



function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo(){
    numeroSecreto = gerarNumerosAletorios();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}





