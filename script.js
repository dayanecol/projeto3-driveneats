let prato;
let bebida;
let sobremesa;
let preco_prato;
let preco_bebida;
let preco_sobremesa;
let celular;
let nome;
let endereco;
celular=21969186016;


function frango(){
    document.getElementById("frango").style.borderColor= "green"
    document.getElementById("pizza").style.borderColor= "#fff"
    document.getElementById("hamburguer").style.borderColor= "#fff"
    document.getElementById("carne").style.borderColor= "#fff"
    prato = "Fango Yin Yang";
    preco_prato = 14.90;
}

function pizza(){
    document.getElementById("pizza").style.borderColor= "green"
    document.getElementById("frango").style.borderColor= "#fff"
    document.getElementById("hamburguer").style.borderColor= "#fff"
    document.getElementById("carne").style.borderColor= "#fff"
    prato = "Pizza na lenha";
}

function hamburguer(){
    document.getElementById("hamburguer").style.borderColor= "green"
    document.getElementById("pizza").style.borderColor= "#fff"
    document.getElementById("frango").style.borderColor= "#fff"
    document.getElementById("carne").style.borderColor= "#fff"
    prato = "Hamburguer";
}

function carne(){
    document.getElementById("carne").style.borderColor= "green"
    document.getElementById("hamburguer").style.borderColor= "#fff"
    document.getElementById("pizza").style.borderColor= "#fff"
    document.getElementById("frango").style.borderColor= "#fff"
    prato = "Churrasco";
}



function coca(){
    document.getElementById("coca").style.borderColor= "green"
    document.getElementById("cerveja").style.borderColor= "#fff"
    document.getElementById("suco").style.borderColor= "#fff"
    document.getElementById("agua").style.borderColor= "#fff"
    bebida = "Coquinha gelada";
    preco_bebida = 6.90;
}

function cerveja(){
    document.getElementById("cerveja").style.borderColor= "green"
    document.getElementById("coca").style.borderColor= "#fff"
    document.getElementById("suco").style.borderColor= "#fff"
    document.getElementById("agua").style.borderColor= "#fff"
    bebida = "Cerveja artesanal";
}

function suco(){
    document.getElementById("suco").style.borderColor= "green"
    document.getElementById("cerveja").style.borderColor= "#fff"
    document.getElementById("coca").style.borderColor= "#fff"
    document.getElementById("agua").style.borderColor= "#fff"
    bebida = "Suco detox";
}

function agua(){
    document.getElementById("agua").style.borderColor= "green"
    document.getElementById("suco").style.borderColor= "#fff"
    document.getElementById("cerveja").style.borderColor= "#fff"
    document.getElementById("coca").style.borderColor= "#fff"
    bebida = "Água mineral";
}


function pudim(){
    document.getElementById("pudim").style.borderColor= "green"
    document.getElementById("bolo").style.borderColor= "#fff"
    document.getElementById("macarron").style.borderColor= "#fff"
    document.getElementById("brigadeiro").style.borderColor= "#fff"
    sobremesa = "Pudim Individual";
    preco_sobremesa = 5.90;
}

function bolo(){
    document.getElementById("bolo").style.borderColor= "green"
    document.getElementById("pudim").style.borderColor= "#fff"
    document.getElementById("macarron").style.borderColor= "#fff"
    document.getElementById("brigadeiro").style.borderColor= "#fff"
    sobremesa = "Fatia de bolo";
}

function macarron(){
    document.getElementById("macarron").style.borderColor= "green"
    document.getElementById("bolo").style.borderColor= "#fff"
    document.getElementById("pudim").style.borderColor= "#fff"
    document.getElementById("brigadeiro").style.borderColor= "#fff"
    sobremesa = "Macarron";
}

function brigadeiro(){
    document.getElementById("brigadeiro").style.borderColor= "green"
    document.getElementById("macarron").style.borderColor= "#fff"
    document.getElementById("bolo").style.borderColor= "#fff"
    document.getElementById("pudim").style.borderColor= "#fff"
    sobremesa = "Brigadeirão";
}




function tresPedidos(){
    if( prato && bebida && sobremesa != undefined){

    document.getElementById("botao").innerHTML = "Fechar pedido";
    document.getElementById("botao").style.backgroundColor = "green";
    // let texto = ´${prato}\n ${bebida}\n ${sobremesa}\n TOTAL´;
    let message = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${(preco_prato+preco_bebida+preco_sobremesa).toFixed(2)}`;
    document.querySelector(".message").innerHTML = message;
    
    }
}

function finalizar(){
    if( prato && bebida && sobremesa != undefined){
    
    document.querySelector(".confirm_order").classList.remove("escondido");
    document.querySelector(".externo").classList.remove("escondido");
    }
}

function confirmarPedido(){
    if( prato && bebida && sobremesa != undefined){
    nome=prompt("A entrega deve ser realizada em que nome?");
    endereco=prompt("Qual o endereço de entrega?")
    let message = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${(preco_prato+preco_bebida+preco_sobremesa).toFixed(2)}\nNome: ${nome}\nEndereço: ${endereco}`;
    message = window.encodeURIComponent(message);
    window.open("https://wa.me/+55"+celular+"?text="+message);
    }

}


