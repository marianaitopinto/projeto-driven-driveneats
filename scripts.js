let nomeCliente = null;
let enderecoCliente = null;
let pratoSelecionado = null;
let bebidaSelecionado = null;
let sobremesaSelecionado = null;
let precoPrato = null;
let precoBebida = null;
let precoSobremesa = null;
let precoFinal = null;

function ativarBotaoFechar() {
    if (pratoSelecionado != null && bebidaSelecionado != null && sobremesaSelecionado != null) {
        const botao = document.querySelector('.fecharPedido');
        botao.classList.add('fechar');
        botao.classList.remove('fecharPedido');
        botao.innerHTML = 'Fechar pedido';
    }
}

function selecionarPrato(classePrato, preco, nomePrato) {
    const prato = document.querySelector(".comidas .selecao");
    if (prato !== null) {
        prato.classList.remove("selecao");
    }
    const opcaoPrato = document.querySelector("." + classePrato);
    opcaoPrato.classList.add("selecao");
    pratoSelecionado = nomePrato;
    precoPrato = preco;
    ativarBotaoFechar();
}

function selecionarBebida(classeBebida, preco, nomeBebida) {
    const bebida = document.querySelector(".bebidas .selecao");
    if (bebida !== null) {
        bebida.classList.remove("selecao");
    }
    const opcaoBebida = document.querySelector("." + classeBebida);
    opcaoBebida.classList.add("selecao")
    bebidaSelecionado = nomeBebida;
    precoBebida = preco;
    ativarBotaoFechar();
}

function selecionarSobremesa(classeSobremesa, preco, nomeSobremesa) {
    const sobremesa = document.querySelector(".sobremesas .selecao");
    if (sobremesa !== null) {
        sobremesa.classList.remove("selecao");
    }
    const opcaoSobremesas = document.querySelector("." + classeSobremesa);
    opcaoSobremesas.classList.add("selecao");
    sobremesaSelecionado = nomeSobremesa;
    precoSobremesa = preco;
    ativarBotaoFechar();
}



function caixaConfirmar() {
    if (pratoSelecionado != null && bebidaSelecionado != null && sobremesaSelecionado != null) {
        const selecionar = document.querySelector(".caixaEscondida");
        selecionar.classList.remove("caixaEscondida");
        precoFinal = precoPrato + precoBebida + precoSobremesa;
        document.querySelector('.opcaoPrato').innerHTML = pratoSelecionado;
        document.querySelector('.precoPrato').innerHTML = precoPrato.toFixed(2).toString().replace('.', ',');
        document.querySelector('.opcaoBebida').innerHTML = bebidaSelecionado;
        document.querySelector('.precoBebida').innerHTML = precoBebida.toFixed(2).toString().replace('.', ',');
        document.querySelector('.opcaoSobremesa').innerHTML = sobremesaSelecionado;
        document.querySelector('.precoSobremesa').innerHTML = precoSobremesa.toFixed(2).toString().replace('.', ',');
        document.querySelector('.precoTotal').innerHTML = precoFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }
}

function cancelar() {
    const confirmar = document.querySelector('.caixaConfirmacao');
    confirmar.classList.add('caixaEscondida');
}

function pedir() {
    nomeCliente = prompt("Qual seu nome?");
    enderecoCliente = prompt("Qual seu endereço?");
    let confirmacao = `Olá, gostaria de fazer o pedido:\n* Prato: ${pratoSelecionado}\n* Bebida: ${bebidaSelecionado}\n* Sobremesa: ${sobremesaSelecionado}\nTotal: R$ ${precoFinal.toFixed(2).replace('.', ',')}\n\nNome: ${nomeCliente}\nEndereço: ${enderecoCliente}`;
    window.open(`https://wa.me/5524993173443?text=${encodeURIComponent(confirmacao)}`);
}