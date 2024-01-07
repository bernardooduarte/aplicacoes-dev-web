let p;

function mudarLetFun() {
  p = document.getElementById("quarto_p");
  p.style.color = "white";
  p.style.backgroundColor = "brown";

  p.onclick = voltarNormal;
}

function voltarNormal() {
  p = document.getElementById("quarto_p");
  p.style.color = "black";
  p.style.backgroundColor = "white";
  
  p.onclick = b_sobre_p;
}

function b_sobre_p() {
  p = document.getElementById("quarto_p");

  p.style.color = "white";
  p.style.backgroundColor = "black";

  p.onclick = voltarNormal;
}
