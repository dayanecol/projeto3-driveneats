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
  }
  elemento.classList.add("selecionado_prato");

  prato = document.querySelector(".selecionado_prato .nome").innerText;
  preco_prato_string = document.querySelector(".selecionado_prato .price")
    .innerText;
}

//Fução para selecionar a Bebida
function selecionarBebida(elemento) {
  let bebidaSelecionado = document.querySelector(".selecionado_bebida");
  if (bebidaSelecionado !== null) {
    bebidaSelecionado.classList.remove("selecionado_bebida");
  }
  elemento.classList.add("selecionado_bebida");

  bebida = document.querySelector(".selecionado_bebida .nome").innerText;
  preco_bebida_string = document.querySelector(".selecionado_bebida .price")
    .innerText;
}

//Fução para selecionar a Sobremesa
function selecionarSobremesa(elemento) {
  let sobremesaSelecionado = document.querySelector(".selecionado_sobremesa");
  if (sobremesaSelecionado !== null) {
    sobremesaSelecionado.classList.remove("selecionado_sobremesa");
  }
  elemento.classList.add("selecionado_sobremesa");

  sobremesa = document.querySelector(".selecionado_sobremesa .nome").innerText;
  preco_sobremesa_string = document.querySelector(
    ".selecionado_sobremesa .price"
  ).innerText;
}

function tresPedidos() {
  console.log(prato);
  console.log(bebida);
  console.log(sobremesa);
  if (prato && bebida && sobremesa !== undefined) {
    document.getElementById("botao").innerHTML = "Fechar pedido";
    document.getElementById("botao").style.backgroundColor = "green";
    // let texto = ´${prato}\n ${bebida}\n ${sobremesa}\n TOTAL´;
    let message = `Olá, gostaria de fazer o pedido:\n Prato: ${prato} ${preco_prato_string}\n Bebida: ${bebida} ${preco_bebida_string} \n Sobremesa: ${sobremesa} ${preco_sobremesa_string} \n Total:`;
    document.querySelector(".message").innerHTML = message;
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
    let message = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${(
      preco_prato +
      preco_bebida +
      preco_sobremesa
    ).toFixed(2)}\nNome: ${nome}\nEndereço: ${endereco}`;
    message = window.encodeURIComponent(message);
    window.open("https://wa.me/+55" + celular + "?text=" + message);
  }
}
