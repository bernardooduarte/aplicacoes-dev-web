const corCaixa = document.getElementById('corCaixa');
const vermelhoInput = document.getElementById('vermelho');
const verdeInput = document.getElementById('verde');
const azulInput = document.getElementById('azul');
const vermelhoValor = document.getElementById('vermelhoValor');
const verdeValor = document.getElementById('verdeValor');
const azulValor = document.getElementById('azulValor');

function mudarCor() {

  const vermelho = vermelhoInput.value;
  const verde = verdeInput.value;
  const azul = azulInput.value;

  corCaixa.style.backgroundColor = `rgb(${vermelho}, ${verde}, ${azul})`;
  vermelhoValor.textContent = vermelho;
  verdeValor.textContent = verde;
  azulValor.textContent = azul;
}

vermelhoInput.addEventListener('input', mudarCor);
verdeInput.addEventListener('input', mudarCor);
azulInput.addEventListener('input', mudarCor);

mudarCor();