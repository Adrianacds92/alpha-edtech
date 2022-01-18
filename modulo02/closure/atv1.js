function multiplier(x){
	return function(y){
  	console.log(x * y);
  }
}

const multiplyBy5 = multiplier(5);

multiplyBy5(10);
multiplyBy5(12);
multiplyBy5(7);