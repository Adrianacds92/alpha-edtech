//Configurando carrinho do Pedro
const velMaximaPedro = 230;
const velMinimaPedro = 150;
const txDerrapagemPedro = 0.03;

//Configurando carrinho do Juca
const velMaximaJuca = 260;
const velMinimaJuca = 120;
const txDerrapagemJuca = 0.05;

//Configurando carrinho da Edna
const velMaximaEdna = 220;
const velMinimaEdna = 180;
const txDerrapagemEdna = 0.01;

/* //Criando contadores de vitoria
let numeroVitoriasPedro = 0;
let numeroVitoriasJuca = 0;
let numeroVitoriasEdna = 0; */

let vitoriaPedro = 0;
let vitoriaJuca = 0;
let vitoriaEdna = 0;




//Função que busca a velocidade de um carrinho
function getVelocity(min, max) {
  return (Math.random() * (max - min)) + min;
}

//Função que executa a corrida
function executaCorrida(numeroVoltas) {
  /* let vitoriaPedro = 0;
  let vitoriaJuca = 0;
  let vitoriaEdna = 0; */

  for (let i = 0; i <= numeroVoltas; i++) {
    if (i == numeroVoltas) {
      return vencer()
    }
    //Executa calculo de velocidade do Pedro
    let velocidadePedro = getVelocity(velMinimaPedro, velMaximaPedro);
    velocidadePedro = velocidadePedro - (velocidadePedro * txDerrapagemPedro);

    /*  console.log("Volta nº - " + (i + 1) + " - Velocidade: " + parseInt(velocidadePedro)); */

    //Executa calculo de velocidade do Juca
    let velocidadeJuca = getVelocity(velMinimaJuca, velMaximaJuca);
    velocidadeJuca = velocidadeJuca - (velocidadeJuca * txDerrapagemJuca);

    /*  console.log("Volta nº - " + (i + 1) + " - Velocidade: " + parseInt(velocidadeJuca)); */
    //Executa calculo de velocidade da Edna
    let velocidadeEdna = getVelocity(velMinimaEdna, velMaximaEdna);
    velocidadeEdna = velocidadeEdna - (velocidadeEdna * txDerrapagemEdna);

    /* console.log("Volta nº - " + (i + 1) + " - Velocidade: " + parseInt(velocidadeEdna)); */


    //Identifica quem ganhou a volta
    /* for (let i = 0; i < numeroVoltas; i++) {
     let velocidadePedro = getVelocity(velMinPedro, velMaxPedro);
     let velocidadeJuca = getVelocity(velMinJuca, velMaxJuca);
     let velocidadeEdna = getVelocity(velMinEdna, velMaxEdna); */

    if ((velocidadePedro > velocidadeJuca) && (velocidadePedro > velocidadeEdna)) {
      vitoriaPedro++

    } else if ((velocidadeJuca > velocidadePedro) && (velocidadeJuca > velocidadeEdna)) {
      vitoriaJuca++

    } else if ((velocidadeEdna > velocidadeJuca) && (velocidadeEdna > velocidadePedro)) {
      vitoriaEdna++

    }

    /*  console.log(vitoriaPedro)
     */
  }
  //Soma 1 no contador de vitórias do vencedor da volta   

  //Identifica quem ganhou mais voltas para determinar o campeão da corrida

}

function vencer() {
let vencedor = "";
/* console.log(vitoriaPedro);
console.log(vitoriaJuca);
console.log(vitoriaEdna); */
  if ((vitoriaPedro > vitoriaJuca) && (vitoriaPedro > vitoriaEdna)) {
    vencedor = "Pedro"
    
  } 
  else if ((vitoriaJuca > vitoriaPedro) && (vitoriaJuca > vitoriaEdna)) {
    vencedor = "Juca"
   
  } else if ((vitoriaEdna > vitoriaJuca) && (vitoriaEdna > vitoriaPedro)) {
    vencedor = "Edna"
 
  }
 console.log("O vencedor é " + vencedor);
 document.getElementById("vencedor").innerHTML =  "O ganhador é "  + vencedor;
}
