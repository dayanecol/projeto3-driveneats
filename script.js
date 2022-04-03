let prato;
let bebida;
let sobremesa;
let preco_prato;
let preco_bebida;
let preco_sobremesa;
let preco_prato_string;
let preco_bebida_string;
let preco_sobremesa_string;
let celular;
let nome;
let endereco;
celular = 21969186016;

//Fução para selecionar o Prato
function selecionarPrato(elemento) {
    let pratoSelecionado = document.querySelector(".selecionado_prato");
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado_prato");
        pratoSelecionado.querySelector(".icon").classList.add("nverificado");
    }
    
    elemento.classList.add("selecionado_prato");
    elemento.querySelector(".icon").classList.remove("nverificado");

    prato = document.querySelector(".selecionado_prato .nome").innerText;
    preco_prato_string = document.querySelector(".selecionado_prato .price").innerText;
    preco_prato = parseFloat(preco_prato_string.replace(/,/g, '.'));
}

//Fução para selecionar a Bebida
function selecionarBebida(elemento) {
    let bebidaSelecionado = document.querySelector(".selecionado_bebida");
    if (bebidaSelecionado !== null) {
        bebidaSelecionado.classList.remove("selecionado_bebida");
        bebidaSelecionado.querySelector(".icon").classList.add("nverificado");
    }
    elemento.classList.add("selecionado_bebida");
    elemento.querySelector(".icon").classList.remove("nverificado");
    
    bebida = document.querySelector(".selecionado_bebida .nome").innerText;
    preco_bebida_string = document.querySelector(".selecionado_bebida .price").innerText;
    preco_bebida = parseFloat(preco_bebida_string.replace(/,/g, '.'));
}

//Fução para selecionar a Sobremesa
function selecionarSobremesa(elemento) {
    let sobremesaSelecionado = document.querySelector(".selecionado_sobremesa");
    let iconVerificado =  document.querySelector(".icon");
    if (sobremesaSelecionado !== null) {
        sobremesaSelecionado.classList.remove("selecionado_sobremesa");
        sobremesaSelecionado.querySelector(".icon").classList.add("nverificado");
    }
    elemento.classList.add("selecionado_sobremesa");
    elemento.querySelector(".icon").classList.remove("nverificado");


    sobremesa = document.querySelector(".selecionado_sobremesa .nome").innerText;
    preco_sobremesa_string = document.querySelector(".selecionado_sobremesa .price").innerText;
    preco_sobremesa = parseFloat(preco_sobremesa_string.replace(/,/g, '.'));
    console.log(preco_sobremesa_string);
    console.log(preco_sobremesa);
}

function tresPedidos() {
    console.log(prato);
    console.log(bebida);
    console.log(sobremesa);
    if (prato && bebida && sobremesa !== undefined) {
        document.getElementById("botao").innerHTML = "Fechar pedido";
        document.getElementById("botao").style.backgroundColor = "#32B72F";
        document.getElementById("botao").style.color = "white";
        document.getElementById("botao").style.fontSize = "20px";
        document.getElementById("botao").style.fontWeight = "bold";
    // let message = `Olá, gostaria de fazer o pedido:\n Prato: ${prato} ${preco_prato_string}\n Bebida: ${bebida} ${preco_bebida_string} \n Sobremesa: ${sobremesa} ${preco_sobremesa_string} \n Total: R$ ${(preco_prato + preco_bebida + preco_sobremesa).toFixed(2).toString().replace('.',',')}`;
    // document.querySelector(".message").innerHTML = message;
    let message_prato = `${prato}`;
    document.querySelector(".message_prato").innerHTML = message_prato;
    let message_prato_preco = `${preco_prato_string}`;
    document.querySelector(".message_prato_preco").innerHTML = message_prato_preco;
    let message_bebida = `${bebida}`;
    document.querySelector(".message_bebida").innerHTML = message_bebida;
    let message_bebida_preco = `${preco_bebida_string}`;
    document.querySelector(".message_bebida_preco").innerHTML = message_bebida_preco;
    let message_sobremesa = `${sobremesa}`;
    document.querySelector(".message_sobremesa").innerHTML = message_sobremesa;
    let message_sobremesa_preco = `${preco_sobremesa_string}`;
    document.querySelector(".message_sobremesa_preco").innerHTML = message_sobremesa_preco;
    let message_total = `TOTAL R$ ${(preco_prato + preco_bebida + preco_sobremesa).toFixed(2).toString().replace('.',',')}`;
    document.querySelector(".message_total").innerHTML = message_total;
  }
}

function finalizar() {
    if (prato && bebida && sobremesa != undefined) {
        document.querySelector(".confirm_order").classList.remove("escondido");
        document.querySelector(".externo").classList.remove("escondido");
    }
}

function confirmarPedido() {
    if (prato && bebida && sobremesa != undefined) {
        nome = prompt("A entrega deve ser realizada em que nome?");
        endereco = prompt("Qual o endereço de entrega?");
        let message = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${(preco_prato + preco_bebida + preco_sobremesa).toFixed(2).toString()}\nNome: ${nome}\nEndereço: ${endereco}`;
        message = window.encodeURIComponent(message);
        window.open("https://wa.me/+55" + celular + "?text=" + message);
    }
}
