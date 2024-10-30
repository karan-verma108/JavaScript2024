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

const numArr = [3, 9, 10, 4, 8];
for (const [key, value] of numArr.entries()) {
  //   console.log('key', key);
  //   console.log('value', value);
}

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
  console.log(item);
};

coding.forEach(printMe);
