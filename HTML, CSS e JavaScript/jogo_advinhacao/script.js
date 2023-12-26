function adivinharNumero() {
  var palpite = prompt("Insira um número aleatório de 1 a 100:");
  var numero_gerado = Math.round(Math.random() * 100) + 1;

  while (palpite != numero_gerado) {
    palpite = prompt("Insira um número aleatório de 1 a 100:");
    if(palpite < 1 || palpite > 100)
    alert("O número deve estar entre 1 e 100!")
  }

  alert("Você adivinhou o número!");
}
