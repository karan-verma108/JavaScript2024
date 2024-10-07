// const arr = [3, 4, 5, 6];

//using join method to convert this array into a string (the opposite method is called, split(), which converts a string into an array)
// const newArr = arr.join('');
// console.log(newArr);

// const newArr = [0, 1, 2, 3, 4, 5];
// const n1 = newArr;
// console.log('removed element', n1.splice(1, 3));
// console.log('main arr', n1);

// flat method in array

const congestedArr = [1, 2, 3, [4, 5], 6, [7, [8, 9], 10]];
// console.log(congestedArr); lets use array flat method to flat this array

const flattedArr = congestedArr.flat(2);
// console.log(flattedArr);

const myStr = 'please turn me into an array';
console.log(Array.isArray(myStr)); //false, checks if the input is an array

const myArrStr = Array.from(myStr); //creates an a new array instance (shalow-copied from an arr-like or iterable object)
const removedArrElements = myArrStr.shift();
const arrLengthByUnShift = myArrStr.unshift('p');
// console.log(arrLengthByUnShift);

// console.log(removedArrElements);

const num1 = 10;
const num2 = 20;
const val3 = true;
const val4 = 'hey';
console.log(Array.of(num1, num2, val3, val4)); //creates a new array instance from variables
