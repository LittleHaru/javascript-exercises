const add = function(number1 , number2) {
	return number1 + number2
};

const subtract = function(number1, number2) {
  return number1 - number2
};

const sum = function(array) {
  return array.reduce((total, val) => total += val, 0)
};

const multiply = function(array) {
  return array.reduce((acc,val) => acc * val)
};

const power = function(a,b) {
  return a ** b
};

const factorial = function(number) {
  let total = 1
  for (let i = number; i > 0; i--){
    total *= i
  }
  return total
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
