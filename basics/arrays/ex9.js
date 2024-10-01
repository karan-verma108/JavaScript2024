// using map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number

const squareEvenNumbers = (arr) => {
  const evenNumbers = arr.map((currNum, index, numArr) => {
    return numArr[index] % 2 === 0 ? currNum ** 2 : currNum;
  });
  return evenNumbers;
};

const result = squareEvenNumbers([1, 2, 3, 5, 6]);
console.log(result);

//     if (arr[index] % 2 === 0) {
//       return currentNumber ** 2;
//     } else {
//       return currentNumber;
//     }
//   });
//   return evenNumbersArray;
