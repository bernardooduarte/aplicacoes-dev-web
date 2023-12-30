function organizarContainer() {
  const select = document.getElementById("unidades").value;

  const div_cf = document.getElementById("c_f");
  const div_kmhms = document.getElementById("kmh_ms");

  if (select === "c_f") {
    div_cf.style.display = "flex";
    div_kmhms.style.display = "none";
  } else if (select === "kmh_ms") {
    div_cf.style.display = "none";
    div_kmhms.style.display = "flex";
  }
}

function apenasNumerosEPonto(value) {
  return /^[0-9.]*$/.test(value);
}

function c_f() {
  const c = document.getElementById("celsius").value;
  const f = document.getElementById("fahrenheit");

  if (!apenasNumerosEPonto(c)) {
    alert("Por favor, insira apenas números e ponto decimal.");
    return false;
  }

  const formula = (c * 9) / 5 + 32;

  f.value = formula.toFixed(1);

  if (c == "") {
    f.value = null;
  }
}

function f_c() {
  const c = document.getElementById("celsius");
  const f = document.getElementById("fahrenheit").value;

  const formula = ((f - 32) * 5) / 9;

  if (!apenasNumerosEPonto(f)) {
    alert("Por favor, insira apenas números e ponto decimal.");
    return false;
  }

  c.value = formula.toFixed(1);

  if (f == "") {
    c.value = null;
  }
}

function kmh_ms() {
  const kmh = document.getElementById("kmh").value;
  const ms = document.getElementById("ms");

  if (!apenasNumerosEPonto(kmh)) {
    alert("Por favor, insira apenas números e ponto decimal.");
    return false;
  }

  const formula = kmh / 3.6;

  ms.value = formula.toFixed(2);

  if (kmh == "") {
    ms.value = null;
  }
}

function ms_kmh() {
  const ms = document.getElementById("ms").value;
  const kmh = document.getElementById("kmh");

  if (!apenasNumerosEPonto(ms)) {
    alert("Por favor, insira apenas números e ponto decimal.");
    return false;
  }

  const formula = ms * 3.6;

  kmh.value = formula.toFixed(2);

  if (ms == "") {
    kmh.value = null;
  }
}
