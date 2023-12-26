function contReg(){
    var contagem = document.getElementById('contagem');
    for(let i = 10; i >= 0; i--){
        alert(i)
        if(i === 0)
        alert('Contagem regressiva concluída!')
    }
}