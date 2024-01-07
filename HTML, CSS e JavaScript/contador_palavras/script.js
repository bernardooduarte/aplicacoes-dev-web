function contarPalav() {
  var textarea = document.getElementById("texto").value.trim();
  var cont = document.getElementById("contador");

  if (textarea != "") {
    const vetor = textarea.split(/\s+/);
    cont.innerHTML = vetor.length;
  } else {
    cont.innerHTML = 0;
  }
}