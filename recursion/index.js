// find the factorial of a number

const factorial = (num) => {
  let result;
  let fact = 1;
  if (num === 0 || num < 0) {
    result = `Please enter value greater than 0`;
    return result;
  }

  if (num === 1) {
    return (result = `Please enter value greater than 1`);
  }

  if (num === 2) {
    result = `The factorial of ${num} is 2`;
    return result;
  }

  for (let i = num; i >= 1; i--) {
    fact *= i; //fact = fact * num
  }
  result = `The factorial of ${num} is ${fact}`;
  return result;
};

const result = factorial(3);

// console.log(result);

// using recursion

const findFactorial = (num) => {
  debugger;
  if (num === 0 || num === 1) {
    return 1;
  }
  if (num > 1) {
    return num * findFactorial(num - 1);
  }
};

const result2 = findFactorial(5);
// console.log(result2);

// find factorial using recursive function

const findAnotherFactorial = (num) => {
  if (num < 2) {
    return 1;
  }
  return num * findAnotherFactorial(num - 1);
};

const newResult = findAnotherFactorial(5);
// console.log(newResult);

//decrement the count
