
const  factorBtn = document.getElementById('factor-Btn');

factorBtn.addEventListener('click', () => {
    
    const factor = parseFloat(document.getElementById('factor').value);
    console.log(factor)
    const  result = factorial(factor);
    showFactorial(result);
});

function factorial(_n){
    console.log(_n)
    if (!Number.isInteger(_n) || (_n < 0 || _n === "")){
        return "Tente digitar um número natural";
    }
    if (_n < 2) {
        return 1;
    }
    return _n*factorial(_n-1)
}

function showFactorial(_result){
   return document.getElementById('invalid').innerHTML = `<h2>${_result}</h2>`;
}