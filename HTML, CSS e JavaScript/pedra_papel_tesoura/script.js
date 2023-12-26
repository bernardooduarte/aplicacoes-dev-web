function pedra_papel_tesoura() {
  var escolha_usuario = document.getElementById("usuario").value;
  var escolha_pc = Math.round(Math.random() * 3) + 1;

  switch (escolha_usuario) {
    case "pedra":
      switch (escolha_pc) {
        case 1:
          alert("Empate!");
          break;
        case 2:
          alert("Pedra e papel: você perdeu!");
          break;
        case 3:
          alert("Pedra e tesoura: você ganhou!");
          break;
      }
      break;
    case "papel":
      switch (escolha_pc) {
        case 1:
          alert("Papel e pedra: você ganhou!");
          break;
        case 2:
          alert("Empate!");
          break;
        case 3:
          alert("Papel e tesoura: você perdeu!");
          break;
      }
      break;
    case "tesoura":
      switch (escolha_pc) {
        case 1:
          alert("Tesoura e pedra: você perdeu!");
          break;
        case 2:
          alert("Tesoura e papel: você ganhou!");
          break;
        case 3:
          alert("Empate!");
          break;
      }
      break;
  }
}
