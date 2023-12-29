function autenticar() {
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  if (usuario == "") {
    alert("Por favor, insira o usuário!");
    return false;
  }

  if (senha == "") {
    alert("Por favor, insira a senha!");
    return false;
  } else if (senha.length < 8) {
    alert("Erro ao autenticar: senha menor que 8 caracteres!");
    return false;
  }

  alert("Usuário autenticado com sucesso!");
}
