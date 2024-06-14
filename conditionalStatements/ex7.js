let a = 5;
let b = 54;

// console.log(b.toString().length);

const findArmstrongNum = (num) => {
  if (num <= 0) {
    console.log('please enter number greater than 0');
  }
  if (
    Math.pow(num.toString()[0], num.toString().length) +
      Math.pow(num.toString()[1], num.toString().length) ===
    num
  ) {
    console.log(`${num} is also an armstrong number`);
  }
};

findArmstrongNum(5);

let n1 = 10;

console.log(
  Math.pow(n1.toString()[0], n1.toString().length) +
    Math.pow(n1.toString()[1], n1.toString().length) ===
    n1
);
