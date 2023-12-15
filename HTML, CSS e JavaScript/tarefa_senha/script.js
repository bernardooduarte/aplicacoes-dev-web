function validarSenha() {
  var senha = document.getElementById("senha").value;
  var senha_confirmada = document.getElementById("senha_confirmada").value;
  var pParagrafo = document.getElementById("pParagrafo");
  var forca = 0;
  var sParagrafo = document.getElementById("sParagrafo");
  var barra = document.getElementById("barra");

  if (senha.length > 5) {
    forca++;

    if (senha_confirmada != senha) {
      pParagrafo.innerHTML = "NÃO CONFIRMADA";
    } else {
      pParagrafo.innerHTML = "CONFIRMADA";
    }

    if (senha.length > 8) {
      forca++;
    }

    var minusculas = false;
    var maiusculas = false;
    var numeros = false;
    var especiais = false;

    for (var i = 0; i < senha.length; i++) {
      var codigo = senha.charCodeAt(i);

      if (codigo >= 48 && codigo <= 57) {
        numeros = true;
      } else if (codigo >= 65 && codigo <= 90) {
        maiusculas = true;
      } else if (codigo >= 97 && codigo <= 122) {
        minusculas = true;
      } else {
        especiais = true;
      }
    }
  }

  if (minusculas) {
    forca++;
  }
  if (maiusculas) {
    forca++;
  }
  if (numeros) {
    forca++;
  }
  if (especiais) {
    forca++;
  }

  sParagrafo.innerHTML = "Força:" + forca;

  var color;

  if (forca === 0) {
    color = "red";
  } else if (forca === 1) {
    color = "orangered";
  } else if (forca === 2) {
    color = "orange";
  } else if (forca === 3) {
    color = "yellow";
  } else if (forca === 4) {
    color = "lightgreen";
  } else if (forca === 5) {
    color = "greenyellow";
  } else if (forca === 6) {
    color = "green";
  }

  barra.style.backgroundColor = color;

  var maxWidth = 40;
  var minWidth = 4;
  var width = minWidth + (forca / 4) * (maxWidth - minWidth);
  barra.style.width = width + "px";
}
