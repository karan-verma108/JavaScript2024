// JavaScript Program to Print the Fibonacci Sequence

let firstNum = 0;
let secondNum = 1;

console.log(firstNum);
console.log(secondNum);
for (let i = 0; i <= 10; i++) {
  let fiboThird = firstNum + secondNum;
  console.log(fiboThird);
  firstNum = secondNum;
  secondNum = fiboThird;
}
