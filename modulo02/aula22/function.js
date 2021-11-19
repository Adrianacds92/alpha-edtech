
function calculaTotal() {
var total = 0;
var numero1 = document.getElementById("numerol").value;
var numero2 = document.getElementById("numero2").value;
total = numero1 / (numero2 * numero2);
document.getElementById("resultado").value = total;
}