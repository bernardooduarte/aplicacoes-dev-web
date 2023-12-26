function converter(){

    var dolar = document.getElementById("dolar").value
    var real = 4.82;
    var formula = dolar * real;

    alert(dolar + " USD equivalem a " + formula.toFixed(2) + " BRL");
}