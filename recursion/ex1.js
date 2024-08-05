/* print n to 1 without using loops

const printNumbers = (num) => {
  if (num === 1) {
    return 1;
  } else {
    console.log(num);
    return printNumbers(num - 1);
  }
};

const result = printNumbers(6);
console.log(result); */

/* print 1 to n without using loops

let i = 1;
const descendingNumbers = (num) => {
  if (num >= 1) {
    console.log(i);
    i++;
    return descendingNumbers(num - 1);
  }
}; 

const result = descendingNumbers(7); */

/* let's try a simpler way

const printNumbers = (num) => {
  if (num < 1) {
    return false;
  }
  printNumbers(num - 1);
  console.log(num);
};
printNumbers(5); */

/* mean of array without recursion

const meanOfArray = (arr) => {
  if (arr.length === 0) {
    return false;
  }

    const total = arr.reduce(
       (accumulator, currentValue) => accumulator + currentValue
     ); 

  let sum = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }

  const mean = sum / arr.length;
  return mean;
};

const result = meanOfArray([1, 9]);
 console.log(result); */

// mean of array with recursion
const meanOfArray = (arr) => {
  if (arr.length === 0) {
    return false;
  } else {
    const firstElement = arr[0];
    const restElements = arr.slice(1);
    return (firstElement + meanOfArray(restElements)) / arr.length;
  }
};

const result = meanOfArray([2, 4, 5, 1]);
console.log(result);
