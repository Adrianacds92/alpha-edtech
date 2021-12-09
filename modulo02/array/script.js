let vector1 = [];

function bntsave() {
    let first = parseFloat (document.querySelectorAll(".num")[0].value);
    let second = parseFloat (document.querySelectorAll(".num")[1].value);
    let third = parseFloat (document.querySelectorAll(".num")[2].value);
    let fourth = parseFloat (document.querySelectorAll(".num")[3].value);
    vector1 = [first, second, third, fourth];
    document.getElementById("result").innerHTML=  vector1 ;
}

function bntinvert () {
    let vector2 = [];
    for(i=3; i>=0; i--) {
        vector2.push (vector1[i]);
    }
    document.getElementById("result").innerHTML=  vector2;
}

function bntordem() {
    let x = vector1;
    let y;
    for (i=0; i<x.length; i++){
        for (j=0; j<x.length; j++){
            if (x[i]<x[j]){
                y = x[i];
                x [i] = x [j];
                x [j] = y;
            }
        }
    }
    document.getElementById("result").innerHTML=  x ;    
}


