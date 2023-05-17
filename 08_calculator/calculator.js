const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for(let num of arr){
    sum += num;
  }
  return sum;
};

const multiply = function(arr) {
  let mul = 1;
  for(let num of arr){
    mul *= num;
  }
  return mul;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if(a < 2) return 1;
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
