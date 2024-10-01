// escape characters

/*for single quote -> \'
for doubt quote -> \"
// for backslash (\\) ->  */

const text = "Hello world I\"m learning 'JavaScript' right now \\";
// console.log(text);

const str = 'Hello Javascript';
//now using Array.from() to convert this string into an array

const strToArr = Array.from(str);
//find the index of S in this newly created array

let jLetterInArr = strToArr.filter((_, index, arr) => arr[index] === 's');

//converting array to string
const newStr = String(jLetterInArr);

//finding index of the found string letter in the array
const indexOfLetter = strToArr.indexOf(newStr);
// console.log(indexOfLetter);

const myObj = {
  id: 1,
  name: 'roy',
  age: 40,
};

const objToArr = Array.from(myObj);
const objToStr = String(myObj);
// console.log(objToArr); //[]
// console.log(objToStr); //[object object]

console.log('strToArr', strToArr);

let indexOfLetterS;
const result = strToArr.map((currElm, index, arr) => {
  indexOfLetterS = currElm == 's' ? index : '';
  //   console.log('indexOfLetter,', indexOfLetter);
  return indexOfLetterS;
});

const ultraResult = result.filter((currElm, index, arr) => index === 10);

console.log('indexofletter', ultraResult);
