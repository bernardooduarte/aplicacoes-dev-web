let div_saudacao;
let primeiro_nome;
var saldo = 0.0;
let saldo_saudacao;
let senha;
let div_opcoes;
let div_deposito;
let div_saque;

function abrirPagina() {
  div_saudacao = document.getElementById("saudacao");
  div_saudacao.style.display = "none";

  div_opcoes = document.getElementById("opcoes");
  div_opcoes.style.display = "none";

  div_deposito = document.getElementById("deposito");
  div_deposito.style.display = "none";

  div_saque = document.getElementById("saque");
  div_saque.style.display = "none";
}

function validarCadastro() {
  primeiro_nome = document.getElementById("primeiro_nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  let email = document.getElementById("e-mail").value;
  senha = document.getElementById("senha").value;
  let senha_confirmada = document.getElementById("senha_confirmada").value;

  if (primeiro_nome == "") {
    alert("Por favor, inserir o primeiro nome!");
    return;
  }
  if (sobrenome == "") {
    alert("Por favor, inserir o sobrenome!");
    return;
  }
  if (email == "") {
    alert("Por favor, inserir o e-mail!");
    return;
  }
  if (senha == "") {
    alert("Por favor, inserir a senha!");
    return;
  }
  if (senha_confirmada == "") {
    alert("Por favor, confirmar a senha!");
    return;
  }

  validarSenha(senha, senha_confirmada);
}

function validarSenha(senha, senha_confirmada) {
  if (senha_confirmada != senha) {
    alert("As senhas não coincidem!");
    return;
  } else {
    iniciarBanco();
  }
}

function iniciarBanco() {
  let div_cadastro = document.getElementById("cadastro");
  div_cadastro.style.display = "none";

  div_saudacao.style.display = "flex";

  let nome_saudacao = document.getElementById("primeiro_nome_span");
  nome_saudacao.innerHTML = primeiro_nome;

  saldo_saudacao = document.getElementById("saldo");
  saldo_saudacao.innerHTML = saldo.toFixed(2).replace(".", ",");

  div_opcoes.style.display = "flex";
}

function deposito() {
  div_opcoes.style.display = "none";
  div_deposito.style.display = "flex";
}

function saque() {
  div_opcoes.style.display = "none";
  div_saque.style.display = "flex";
}

function voltar() {
  div_deposito.style.display = "none";
  div_saque.style.display = "none";
  div_opcoes.style.display = "flex";
}


//corrigir senha_transacao depois

function depositar() {

  let senha_transacao = document.getElementById("senha_transacao").value;

  if (senha_transacao != senha) {
    alert("Senha incorreta!");
    return;
  }

  var valor_depositado = parseFloat(
    document.getElementById("valor_deposito").value
  );

  saldo += valor_depositado;
  saldo_saudacao.innerText = saldo.toFixed(2).replace(".", ",");

  alert("Valor depositado com sucesso!");
}

function sacar() {

  let senha_transacao = document.getElementById("senha_transacao").value;

  if (senha_transacao != senha) {
    alert("Senha incorreta!");
    return;
  }

  var valor_sacado = parseFloat(document.getElementById("valor_saque").value);

  if (valor_sacado > saldo) {
    alert("Saldo insuficiente!");
    return;
  }

  saldo -= valor_sacado;
  saldo_saudacao.innerText = saldo.toFixed(2).replace(".", ",");

  alert("Valor sacado com sucesso!");
}
