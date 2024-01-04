let tarefa;
let lista;
let section;
let input;

function adicionarTarefa(event) {
  event.preventDefault();
  tarefa = document.getElementById("tarefa").value;
  lista = document.createElement("li");
  lista.innerText = tarefa;

  if (tarefa == "") {
    alert("Por favor, adicione uma tarefa!");
    return;
  }

  input = document.createElement("input");
  input.type = "checkbox";

  section = document.querySelector("section");

  document.querySelector("ul").appendChild(lista);
  lista.appendChild(input);
  section.style.display = "flex";

  input.addEventListener("click", removerTarefa);
}

function removerTarefa(event) {
  let item = event.target.parentNode;
  let lista = item.parentNode;
  item.style.textDecoration = "line-through";

  setTimeout(() => {
    lista.removeChild(item);

    if (lista.children.length === 0) {
      alert("Todas as tarefas concluídas!");
      section.style.display = "none";
    }
  }, 800);
}

function carregarTarefa() {
  let section = document.querySelector("section");
  section.style.display = "none";
}
