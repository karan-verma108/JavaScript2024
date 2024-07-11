//filter unique values and console them

// const numArray = [1, 3, 2, 4, 3, 6, 9];
// const repeatedValues = [];
// for (let i = 0; i < numArray.length; i++) {
//   for (let j = i + 1; j < numArray.length; j++) {
//     if (numArray[i] === numArray[j]) {
//       repeatedValues.push(numArray[i]);
//     }
//   }
// }

// const repeatedNumber = Number(repeatedValues);
// console.log('repeatedNumber', repeatedNumber);
// const firstIndex = numArray.indexOf(repeatedNumber);

// const firstRemoved = numArray.splice(firstIndex, 1);
// const lastIndex = numArray.lastIndexOf(repeatedNumber);
// const secondRemoved = numArray.splice(lastIndex, 1);
// console.log('firstRemoved', firstRemoved);
// console.log('secondRemoved', secondRemoved);
// console.log('New array without uniques values is', numArray);

const numArray = [1, 3, 2, 4, 3, 6, 9, 4];
const repatedValues = [];
for (let i = 0; i < numArray.length; i++) {
  for (let j = i + 1; j < numArray.length; j++) {
    if (numArray[i] === numArray[j]) {
      repatedValues.push(numArray[i]);
    }
  }
}

console.log('repeatedValues', repatedValues);
console.log('array before change', numArray);
const [value1, value2] = repatedValues;
// console.log(value1);
// console.log(value2);

const firstIndexofValue1 = numArray.indexOf(value1);
numArray.splice(firstIndexofValue1, 1);
const lastIndexOfValue1 = numArray.lastIndexOf(value1);
numArray.splice(lastIndexOfValue1, 1);

const firstIndexofValue2 = numArray.indexOf(value2);
numArray.splice(firstIndexofValue2, 1);

const lastIndexOfValue2 = numArray.lastIndexOf(value2);
numArray.splice(lastIndexOfValue2, 1);

console.log('array after change', numArray);
