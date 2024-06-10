// JavaScript Program to Find the Factorial of a Number

const factorial = (num) => {
  for (let i = num; i > 1; i--) {
    return i * (i - 1);
  }
};

const result = factorial(2);
result === undefined
  ? console.log('please enter a number greater than 1')
  : console.log(result);
