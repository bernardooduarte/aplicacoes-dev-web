
let data_sorteada;

function sortearData() {

    let paragrafo = document.getElementById("paragrafo");

    let max_dia = 31;
    let min_dia = 1;

    let dia = Math.round(Math.random() * (max_dia - min_dia) + min_dia);
    let mes = Math.round(Math.random() * 11) + 1;
    let ano = 2023;

    data_sorteada = new Date(`${ano}-${mes}-${dia}`);

    let data_formatada = `${dia}/${mes}/${ano}`;

    paragrafo.innerHTML = "Informe uma data anterior a: " + data_formatada;

}

function verificarData() {

    let data_input = new Date(document.getElementById("data_input").value);

    if (data_input >= data_sorteada) {
        alert("Data inválida!");
    }

}