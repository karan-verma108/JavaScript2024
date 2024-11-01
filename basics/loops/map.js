// map in javascript

// a map is an object that holds key value pair and remembers the insertion order of the keys

const myFirstMap = new Map();
myFirstMap.set('en', 'English');
myFirstMap.set('hi', 'Hindi');
myFirstMap.set('fr', 'French');
myFirstMap.set('hi', 'Hindi');

for (const [key, value] of myFirstMap) {
  //   console.log(key); //prints just the key
  //   console.log(value); //prints just the value
}

// const numArr = [3, 9, 10, 4, 8];
// for (const [key, value] of numArr.entries()) {
//   //   console.log('key', key);
//   //   console.log('value', value);
// }

const myObj = {
  name: 'yellowPurple',
  age: 99,
  place: 'space',
};

// for (const [key, value] in myObj) { //incorrect usage
//   console.log(key);
//   console.log(value);
// }

for (const key in myObj) {
  //incorrect usage
  //   console.log(key);
}

// for (const index in numArr) {
//   console.log(index);
// }

// for (const key in myFirstMap) {
//   console.log(key);
// }

const coding = ['js', 'ruby', 'python', 'swift'];

const printMe = (item) => {
  // console.log(item);
};

// coding.forEach(printMe);

const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// /1 first using filter method

const filteredNums = numsArr.filter((num) => num > 4);

// console.log('filtered nums are ', filteredNums);

// 2 using forEach method

// const newNums = [];

// numsArr.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log('filtered nums are ', newNums);

const shoppingCart = [
  {
    itemName: 'js course',
    price: 5999,
  },
  {
    itemName: 'python course',
    price: 3999,
  },
  {
    itemName: 'react native course',
    price: 8999,
  },
];

//use reduce() to find the sum of all the course's prices

const totalPrice = shoppingCart.reduce(
  (acc, currVal) => acc + currVal.price,
  0
);

console.log('total price is ', totalPrice);
