//question a - multiplication of all parameters
function productOfFour(num1,num2,num3,num4){
    return num1*num2*num3*num4;
}

const arr = createArray(4);
const test0 = productOfFour(...arr);
console.log(test0);

//question b - concatenation
const arr1 = createArray(8);
const arr2 = createArray(5);
function arrConcatenation(_arr1,_arr2){
    const arr = [..._arr1,..._arr2]
    return arr;
}
const test1 = arrConcatenation(arr1,arr2);
console.log(`array1: ${arr1}`);
console.log(`array2: ${arr2}`);
console.log(test1);

//question c - draw
function randomRange(_min,_max){
    return Number((Math.random()*(_max - _min) + _min).toFixed(0));
} 

function createArray(_n){
    const arr = []
    for (let j = 0; j < _n; j++ ){
        arr.push((randomRange(0,100)))
    }
    return arr
}

const arr3 = createArray(10);
const test2 = Math.max(...arr3);

console.log(`array3: ${arr3}`);
console.log(test2);