function selecionarPrato(classePrato) {
    const prato = document.querySelector(".comidas .selecao");
    if (prato !== null) {
        prato.classList.remove("selecao");
    }
    const opcaoPrato = document.querySelector("."+classePrato);
    opcaoPrato.classList.add("selecao");
}

function selecionarBebida(classeBebida) {
    const bebida = document.querySelector(".bebidas .selecao");
    if (bebida !== null) {
        bebida.classList.remove("selecao");
    }
    const opcaoBebida = document.querySelector("."+classeBebida);
    opcaoBebida.classList.add("selecao")
}

function selecionarSobremesa(classeSobremesa) {
    const sobremesa = document.querySelector(".sobremesas .selecao");
    if (sobremesa !== null) {
        sobremesa.classList.remove("selecao");
    }
    const opcaoSobremesas = document.querySelector("."+classeSobremesa);
    opcaoSobremesas.classList.add("selecao")
}


/* BONUS */

let nomeCliente = null;
let enderecoCliente = null;

function caixaConfirmar() {
    nomeCliente = prompt("Qual seu nome?");
    enderecoCliente = prompt("Qual seu endereço?");
    const selecionar = document.querySelector(".caixaEscondida");
    selecionar.classList.remove("caixaEscondida");
}
