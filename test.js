// console.log('this is a test file');

let score = '';

let scoreInNum = Number(score);
// console.log('value of scoreInNum after conversion', scoreInNum);

// console.log('type of scoreInNum is', typeof scoreInNum);

// console.log(typeof (1 - '1'));

let x = 3;
const y = x++;

// console.log(`x:${x}, y:${y}`);

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);

// console.log('02' > 1); //'02' is converted into a number before comparison is made, and the leading 0 is ignored, thus, 2 > 1 returns true

let stringNum = '002';
//therefore,
// console.log('type of string num before comparison', typeof stringNum);

// console.log(stringNum == 2); //true
// console.log('type of string num after comparison', typeof stringNum);

// but
// console.log('002' === 2); //false

// console.log(undefined >= 0); //false

// console.log(null == 0); //false
// console.log(null < 0); //false
// console.log(null <= 0); //true
// console.log(null >= 0); //true

// console.log('' == 0); //true

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId); //false
// console.log(typeof id); //symbol

const bigNumber = 4564365743632543534534n;
// console.log('type of bigNumber', typeof bigNumber);

const arr = [12, 3, 4, 5];
const obj = {
  id: 1,
  name: 'don',
};

const myFun = () => {
  return 1 + 1;
};
// console.log(typeof arr);
// console.log(typeof obj);
// console.log(typeof myFun);

// function abc() {
//   console.log(abc.xyz);
// }

// abc();
// abc.xyz = 400;
// abc.xyz = 200;
// abc();

// const numArr = [1, 2, 3, 4];

// numArr[100] = 400;
// console.log(numArr);
