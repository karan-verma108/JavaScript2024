//write a function calculator that takes two paremeters and an operater parameter and returns the result of the operation. The function should support addition, subtraction, multiplication and division.

let result = 0;
const calculator = (num1, num2, operater) => {
    switch (operater) {
        case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = (num1 / num2).toFixed(2);
      break;
    default:
      result = 'Please enter a recognizable operator';
  }
  return result;
};

const returnedValue = calculator(4, 3, '*');
console.log(returnedValue);
