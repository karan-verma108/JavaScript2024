//Program to find if number is an armstrong number

const isArmstrong = (num) => {
  const firstNumber = Number(num.toString()[0]);
  const secondNumber = Number(num.toString()[1]);
  const thirdNumber = Number(num.toString()[2]);
  const fouthNumber = Number(num.toString()[3]);

  if (num.toString().length === 1) {
    return num;
  } else if (num.toString().length === 2) {
    return false;
  } else if (
    Math.pow(firstNumber, num.toString().length) +
      Math.pow(secondNumber, num.toString().length) +
      Math.pow(thirdNumber, num.toString().length) ===
    num
  ) {
    return num;
  } else if (
    Math.pow(firstNumber, num.toString().length) +
      Math.pow(secondNumber, num.toString().length) +
      Math.pow(thirdNumber, num.toString().length) +
      Math.pow(fouthNumber, num.toString().length) ===
    num
  ) {
    return num;
  } else {
    return false;
  }
};

const result = isArmstrong(153);

if (typeof result === 'number') {
  console.log(`${result} is an armstrong number`);
} else {
  console.log(`It's not an armstrong number`);
}
