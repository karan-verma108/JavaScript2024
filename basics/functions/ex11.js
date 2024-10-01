// using the map method, write a function that takes an array of string and returns a new array with each string capitalized

// const capitalizeStringFn = (arrOfStr) => {
//   return arrOfStr.map((currentString) => currentString.toUpperCase());
// };

// const result = capitalizeStringFn(['hello', 'rony', 'john']);
// console.log(result);

//now return only first letter capitalized

const capitalizeStringFn = (arrOfStr) => {
  let [str1, str2] = arrOfStr;
  const firstLetterOfStr1 = str1.at(0).toUpperCase();
  const firstLetterOfStr2 = str2.at(0).toUpperCase();

  const newStr1 = str1.slice(1, str1.length);
  const newStr2 = str2.slice(1, str1.length);
  const resultantStr1 = firstLetterOfStr1 + newStr1;
  const resultantStr2 = firstLetterOfStr2 + newStr2;

  console.log(resultantStr1);
  console.log(resultantStr2);
};

capitalizeStringFn(['hellow', 'roy']);
