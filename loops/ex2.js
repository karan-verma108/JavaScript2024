//check if user wrote a positive number

/*let isNumberPositive = true;
const isPositive = (num) => {
  while (num % 2 !== 0) {
    isNumberPositive = false;
    console.log(
      `You entered a negative number ${num}, please enter a positive number`
    );
    break;
  }
  if (isNumberPositive) {
    console.log(`Hurray ! You entered a positive number ${num}`);
  }
};

isPositive(17); */

let positiveNumber;
let inputValue;

// do {
//   inputValue = prompt('please enter a positive number');
//   positiveNumber = parseFloat(inputValue);
// } while (isNaN(positiveNumber) || positiveNumber < 0);
// console.log(`you entered a positive number ${positiveNumber}`);

//sum of numbers from 1 to 10 using for loop

let sum = 0;
for (let i = 1; i <= 3; i++) {
  sum += i;
}

console.log(sum);
