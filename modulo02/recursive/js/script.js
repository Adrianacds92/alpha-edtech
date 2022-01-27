function randomRange(_min,_max){
    return Number(Math.random()*(_max - _min) + _min).toFixed(2);
} 

function createrMatrix(_i,_j){
    const matrix = [];
    for (let i = 0; i < _i; i++){
        matrix.push(createArray(_j));
    }
    return matrix
}

function createArray(_n){
    const arr = []
    for (let j = 0; j < _n; j++ ){
        console.log(arr);
        arr.push(randomRange(0,100))
    }
    return arr
}

const test = createrMatrix(5,2);
console.log(test);
console.log(`line: ${test.length}`);
//console.log(`column: ${test[0].length}`)

console.log(typeof test[0]);

function recursive(_matrix){
    const line = _matrix.length;
    //const column = _matrix[0].length
    if (typeof _matrix === "object"){
        _matrix.forEach(element => {
            return (recursive(element))
        });
    }else {
        return console.log(_matrix)
    }
   
}

recursive(test)

