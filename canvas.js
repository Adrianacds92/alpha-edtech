const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let numero = 0;
let escala = 12.5;

function desenhar(){
    let angulo = numero * 3;
    let raio = escala * Math.sqrt(numero);
    let positionX = raio * Math.sin(angulo) + canvas.width/2;
    let positionY = raio * Math.cos(angulo) + canvas.height/2;
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(positionX, positionY, 15, 0, Math.PI *2);
    ctx.lineWidth = 4;
    ctx.closePath(),
    ctx.fill();
    ctx.stroke();
    numero++;   
}
function animate(){
   desenhar();
   requestAnimationFrame(animate);
}
animate();