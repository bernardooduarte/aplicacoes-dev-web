function formatarCEP(event) {
  const cep = document.getElementById("cep");
  const key = event.key;

  if (!/\d/.test(key)) event.preventDefault();

  if (key === "Backspace") cep.value = null;
  else if (cep.value.length === 2) cep.value += ".";
  else if (cep.value.length === 6) cep.value += "-";
}
