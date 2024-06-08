// JavaScript Program to Find the Largest Among Three Numbers

const largestAmongThree = (num1, num2, num3) => {
  if (num1 > num2) {
    if (num1 > num3) {
      return num1;
    }
  } else if (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};

// const result = largestAmongThree(110, 23, 30);
// console.log(`The largest number is `, result);

// using Math.max()

const largestNumber = Math.max(43, 5, 229);
console.log(largestNumber);
