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
console.log(myPersonalEmail);
console.log(myPersonalPassword);
