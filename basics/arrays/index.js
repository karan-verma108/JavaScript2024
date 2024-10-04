const arr = [3, 4, 5, 6];

//using join method to convert this array into a string (the opposite method is called, split(), which converts a string into an array)
// const newArr = arr.join('');
// console.log(newArr);

const newArr = [0, 1, 2, 3, 4, 5];
const n1 = newArr;
console.log('removed element', n1.splice(1, 3));
console.log('main arr', n1);
