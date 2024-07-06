const numArray = [1, 3, 23, 0, 54, 9, 10];

// const result = numArray.filter((currentElement, index) => {
//   return currentElement > 5;
// });

// console.log(`numbers that are greater than 5 are ${result}`);

const result = numArray.find((currentElement) => {
  return currentElement > 5;
});

console.log(result);
