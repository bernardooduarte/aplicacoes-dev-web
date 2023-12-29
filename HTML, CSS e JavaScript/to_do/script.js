let tarefa;

function adicionarTarefa(event) {
  event.preventDefault();
  let input = document.querySelector("#tarefa");
  tarefa = input.value;
  let lista = document.querySelector("#lista-tarefas");
  let item = document.createElement("li");
  let deleteButton = document.createElement("span");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  if (tarefa === "") {
    alert("Por favor, digite uma tarefa!");
    return false;
  }

  alert(`${tarefa} adicionado (a) com sucesso!`);

  item.appendChild(checkbox);
  item.appendChild(document.createTextNode(tarefa));
  lista.appendChild(item);
  deleteButton.className = "material-symbols-outlined";
  deleteButton.textContent = "delete";
  item.appendChild(deleteButton);
  input.value = "";

  checkbox.addEventListener("click", riscarTarefa);
  deleteButton.addEventListener("click", removerTarefa);
}

function removerTarefa(event) {
  let item = event.target.parentNode;
  let lista = item.parentNode;
  lista.removeChild(item);
}

function riscarTarefa(event) {
  let item = event.target.parentNode;
  if (event.target.checked) {
    alert(`${tarefa} concluído (a) com sucesso!`);
    item.style.textDecoration = "line-through";
    item.querySelector("span").style.display = "none";
    time = setTimeout(function () {
      removerTarefa(event);
    }, 800);
  } else {
    item.style.textDecoration = "none";
    item.querySelector("span").style.display = "inline";
  }
}
