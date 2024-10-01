const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//numbers to get deleted -> 6

// const result = numbers.filter((currElem) => currElem !== 6);

// const firstIndexOfSix = numbers.indexOf(6);
// const lastIndexOfSix = numbers.lastIndexOf(6);

// numbers.splice(firstIndexOfSix, 1);
// numbers.splice(lastIndexOfSix, 1);
// console.log(numbers);
// console.log(result);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] !== 6);
}
