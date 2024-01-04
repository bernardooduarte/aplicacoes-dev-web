let contador = 0;

function incremento() {
  contador++;

  document.querySelector("span").innerHTML = contador;
}

function decremento() {
  contador--;

  if (contador < 0) {
    alert("O contador não pode ser menor que zero!");
    return;
  }

  document.querySelector("span").innerHTML = contador;
}

function reiniciar() {
  contador = 0;
  document.querySelector("span").innerHTML = contador;
}
