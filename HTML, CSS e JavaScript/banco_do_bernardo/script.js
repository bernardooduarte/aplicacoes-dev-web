let div_saudacao
let primeiro_nome;
let saldo;

function abrirPagina(){
    div_saudacao = document.getElementById("saudacao");
    div_saudacao.style.display = "none";
}

function validarCadastro(){
    
    primeiro_nome = document.getElementById("primeiro_nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("e-mail").value;
    let senha = document.getElementById("senha").value;
    let senha_confirmada = document.getElementById("senha_confirmada").value;
    
    if(primeiro_nome == ""){
        alert("Por favor, inserir o primeiro nome!");
        return;
    }
    if(sobrenome == ""){
        alert("Por favor, inserir o sobrenome!");
        return;
    }
    if(email == ""){
        alert("Por favor, inserir o e-mail!");
        return;
    }
    if(senha == ""){
        alert("Por favor, inserir a senha!");
        return;
    }
    if(senha_confirmada == ""){
        alert("Por favor, confirmar a senha!");
        return;
    }

    validarSenha(senha, senha_confirmada);
}

function validarSenha(senha, senha_confirmada){
    if(senha_confirmada != senha){
        alert("As senhas não coincidem!")
        return
    }

    else{
        iniciarBanco();
    }
}

function iniciarBanco(){

    let div_cadastro = document.getElementById("cadastro");
    div_cadastro.style.display = "none";

    div_saudacao.style.display = "flex";

    let nome_saudacao = document.getElementById("primeiro_nome_span");
    nome_saudacao.innerHTML = primeiro_nome;

    let saldo_saudacao = document.getElementById("saldo")
    saldo = 0.00;
    saldo_saudacao.innerHTML = saldo.toFixed(2)
}

