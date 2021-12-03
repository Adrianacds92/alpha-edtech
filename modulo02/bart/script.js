let repetir;
let count = 0;
let lousacount = 0;
let lousaapagou = 0;
let countfrases = 0;

function lousa() {
    repetir = document.getElementById("repetição").value;
    console.log (repetir);
    while (repetir > count) {
        if (lousacount < 11) {
            lousacount++;
            count++;
                if (repetir === count) {
                    break;
                }        
        }else{
            lousacount = 0;
            lousaapagou ++;
        }
    }
    while ( lousacount > countfrases) {
        document.getElementById("area").innerHTML = document.getElementById("area").innerHTML + "Eu não vou dar spoilers de filmes<br />";
        countfrases++;
    }
    document.getElementById("apagou").innerHTML =  lousaapagou;
    document.getElementById("linhas").innerHTML =  lousacount;
}