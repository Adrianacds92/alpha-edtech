function somar() {
 let Numero1 = parseFloat(document.getElementById("valor1").value);
 let Numero2 = parseFloat(document.getElementById("valor2").value);
 document.getElementById("resultado").innerHTML = "Resultado "  + (Numero1+Numero2);
}
function subtrair() {
    let Numero1 = parseFloat(document.getElementById("valor1").value);
    let Numero2 = parseFloat(document.getElementById("valor2").value);
    document.getElementById("resultado").innerHTML = "Resultado " +(Numero1-Numero2);
}

function multiplicar() {
    let Numero1 = parseFloat(document.getElementById("valor1").value);
    let Numero2 = parseFloat(document.getElementById("valor2").value);
    document.getElementById("resultado").innerHTML = "Resultado " + (Numero1*Numero2);
}

function dividir() {
    let Numero1 = parseFloat(document.getElementById("valor1").value);
    let Numero2 = parseFloat(document.getElementById("valor2").value);
    document.getElementById("resultado").innerHTML = "Resultado " + (Numero1/Numero2);
}



   