const myObj = {
  name: 'rocky',
  'full name': 'rocky miavia',
  age: 39,
  city: 'Miami Florida',
};

//two ways to access property of an object

// i) first
// console.log(myObj.city);

// ii) second
// console.log(myObj['city']);

// so now the full name property can only be accessed using the second way
// console.log(myObj['full name']);

// to freeze an object
// Object.freeze(myObj); //now the object has been frozen, it can't be mutated now by any means

myObj.age = 4; //it didn't impact the age property of the object, because it is frozen
// console.log(myObj);

myObj.greetings = function () {
  return `Hi coder, ${this.name}`; //remember that 'this' keyword can only be used with normal functions, not arraw functions
};

// console.log(myObj.greetings());

const regularUser = {
  email: 'regular@mail.com',
  password: '123',
  fullName: {
    firstName: 'newUser',
    lastName: 'oldest',
  },
};

// console.log(regularUser['fullName']['firstName']); //using square braces
// console.log(regularUser.fullName.firstName); //using the dot notation

// lets look at hasOwnProperty() method of objects

// console.log(regularUser.hasOwnProperty('email')); //it checks if email property exists in the regularUser object

const { email: myPersonalEmail, password: myPersonalPassword } = regularUser; //this is one way to give a different name to the destructed item
// console.log(myPersonalEmail);
// console.log(myPersonalPassword);

const obj = {
  name: 'roy',
  age: 42,
  income: 'nice',
};

// for (item in obj) { for in loop can be applied to object
//   console.log(item);
// }

// for (let [key, value] of Object.entries(obj)) {
//   //this way we can use for of loop to iterate over objects
//   console.log(`${key}, ${value}`);
// }

// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

// console.log(
//   Object.defineProperty(obj, 'name', {
//     enumerable: false,
//   })
// );

// for (let value of obj.name) {
//   console.log('value', value); //so we can still access the name property and loop through it but when accessing or looping throught the entire object, in that case, the 'name' property will be excluded (hidden)
// }

// console.log((obj.name = 'karan')); //doesn't override the name property now

console.log(Math.PI);
Object.defineProperty(Math, 'PI', {
  writable: true,
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptor(Math, 'PI')); //cannot redine Math.PI property
