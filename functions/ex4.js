//write a javascript program to reverse a string

// const reverseString = (stringValue) => {
//   let emptyArr = [];
//   for (let i = stringValue.length - 1; i >= 0; i--) {
//     emptyArr.push(stringValue[i]);
//   }
//   return emptyArr.join('');
// };

// const reverseString = (stringValue) => {
//   let reversedStr = '';
//   for (let i = stringValue.length - 1; i >= 0; i--) {
//     reversedStr += stringValue[i];
//   }
//   return reversedStr;
// };

// const result = reverseString('karan');
// console.log(result);

// write a function to check if the given string is a palindrome

const isPalindrome = (myString) => {
  let reversedStr = '';
  for (let i = myString.length - 1; i >= 0; i--) {
    reversedStr += myString[i];
  }

  if (myString === reversedStr) {
    return true;
  } else {
    return false;
  }
};

const result = isPalindrome('ooo');
console.log(result);
