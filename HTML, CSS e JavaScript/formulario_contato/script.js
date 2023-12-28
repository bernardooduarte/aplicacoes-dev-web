function validarForm(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("e-mail").value;
    let msg = document.getElementById("msg").value;

    if(nome == "" || email == "" || msg == ""){
        alert("Por favor, preencher todos os campos!");
        return false;
    }
}