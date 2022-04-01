let prato;
let bebida;
let sobremesa;

function frango(){
    document.getElementById("frango").style.borderColor= "green"
    document.getElementById("pizza").style.borderColor= "#fff"
    document.getElementById("hamburguer").style.borderColor= "#fff"
    document.getElementById("carne").style.borderColor= "#fff"
    prato = "frango";
}

function pizza(){
    document.getElementById("pizza").style.borderColor= "green"
    document.getElementById("frango").style.borderColor= "#fff"
    document.getElementById("hamburguer").style.borderColor= "#fff"
    document.getElementById("carne").style.borderColor= "#fff"
    prato = "pizza";
}

function hamburguer(){
    document.getElementById("hamburguer").style.borderColor= "green"
    document.getElementById("pizza").style.borderColor= "#fff"
    document.getElementById("frango").style.borderColor= "#fff"
    document.getElementById("carne").style.borderColor= "#fff"
    prato = "hamburguer";
}

function carne(){
    document.getElementById("carne").style.borderColor= "green"
    document.getElementById("hamburguer").style.borderColor= "#fff"
    document.getElementById("pizza").style.borderColor= "#fff"
    document.getElementById("frango").style.borderColor= "#fff"
    prato = "carne";
}



function coca(){
    document.getElementById("coca").style.borderColor= "green"
    document.getElementById("cerveja").style.borderColor= "#fff"
    document.getElementById("suco").style.borderColor= "#fff"
    document.getElementById("agua").style.borderColor= "#fff"
    bebida = "coca";
}

function cerveja(){
    document.getElementById("cerveja").style.borderColor= "green"
    document.getElementById("coca").style.borderColor= "#fff"
    document.getElementById("suco").style.borderColor= "#fff"
    document.getElementById("agua").style.borderColor= "#fff"
    bebida = "cerveja";
}

function suco(){
    document.getElementById("suco").style.borderColor= "green"
    document.getElementById("cerveja").style.borderColor= "#fff"
    document.getElementById("coca").style.borderColor= "#fff"
    document.getElementById("agua").style.borderColor= "#fff"
    bebida = "suco";
}

function agua(){
    document.getElementById("agua").style.borderColor= "green"
    document.getElementById("suco").style.borderColor= "#fff"
    document.getElementById("cerveja").style.borderColor= "#fff"
    document.getElementById("coca").style.borderColor= "#fff"
    bebida = "agua";
}


function pudim(){
    document.getElementById("pudim").style.borderColor= "green"
    document.getElementById("bolo").style.borderColor= "#fff"
    document.getElementById("macarron").style.borderColor= "#fff"
    document.getElementById("brigadeiro").style.borderColor= "#fff"
    sobremesa = "pudim";
}

function bolo(){
    document.getElementById("bolo").style.borderColor= "green"
    document.getElementById("pudim").style.borderColor= "#fff"
    document.getElementById("macarron").style.borderColor= "#fff"
    document.getElementById("brigadeiro").style.borderColor= "#fff"
    sobremesa = "bolo";
}

function macarron(){
    document.getElementById("macarron").style.borderColor= "green"
    document.getElementById("bolo").style.borderColor= "#fff"
    document.getElementById("pudim").style.borderColor= "#fff"
    document.getElementById("brigadeiro").style.borderColor= "#fff"
    sobremesa = "macarron";
}

function brigadeiro(){
    document.getElementById("brigadeiro").style.borderColor= "green"
    document.getElementById("macarron").style.borderColor= "#fff"
    document.getElementById("bolo").style.borderColor= "#fff"
    document.getElementById("pudim").style.borderColor= "#fff"
    sobremesa = "brigadeiro";
}




function finalizar(){
    if( prato && bebida && sobremesa != undefined){

    document.getElementById("botao").innerHTML = "Fechar pedido";
    document.getElementById("botao").style.backgroundColor = "green";
    
    }
}

