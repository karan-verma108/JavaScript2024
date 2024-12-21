//JS has prototypal behaviour, also known as prototype-based inheritance. In JavaScript, when we create a new object, so javascript automatically creates a prototype object for it, so every object has a prototype. This prototype object here serves as a template or a parent from which our object can inherit properties or methods.

// Important: now when we access a property on an object that we created, JS first looks it in the object itself, and if not found, then it looks it in tts prototype object

const myStr = 'hi this is my string';
// console.log(myStr.map((item) => item));

let result = [];
for (let i = 0; i < myStr.length; i++) {
  result.push(myStr.i); //we can't use dot notation here because then it looks for the i property inside myStr(string) which is not possible as it's not an object, so the correct way to access the values/elements of myStr in a for loop is using the bracket notation myStr[i]
}

// console.log(result, 'result');

function multiplyBy3(num) {
  return num * 3;
}

// console.log(multiplyBy3(3));
multiplyBy3.powersOf = 4; //here the function is acting as an object, meaning we can define properties inside a function as we do in an object, that's pretty crazy
// console.log(multiplyBy3.powersOf);

multiplyBy3.finalResult = function () {
  const result = multiplyBy3(5);
  return `The final result is ${result}`;
};

const firstMulti = multiplyBy3(4);

// console.log(multiplyBy3.finalResult()); //damm i didn't expect it to work!
// console.log(multiplyBy3.finalResult());

// console.log('prototype of this function', multiplyBy3.prototype); //as expected an empty object representation

function myUser(username, age) {
  if (!(this instanceof myUser)) {
    //we are adding this check to ensure that the 'myUser' function is called with the 'new' keyword only, in order to avoid any errors, so what errors are we talking about, when this function is called and considering we defined a method later to this function, lastly while calling this function we would create an instance for it, and if we have more than one instance of this function and for each instances that function must behave differently then in that case, we need to use 'new' keyword which would simply create a new object that would obtain the properties of this function we created it from.
    throw new Error('My user must be called with new keyword');
  }
  this.username = username;
  this.age = age;
}

myUser.prototype.printTheAge = function () {
  //   console.log(`The entered age is ${age}`); //doenst work
  console.log(`The entered age is ${this.age}`); // works
};

// console.log(myUser);

const user1 = new myUser('roy', 31);
// console.log('user 1', user1);

// const user2 = new myUser('don', 43);
// console.log(user1.printTheAge());

// console.log(user1.printTheAge());

const userName = 'danny       ';
// console.log(userName.length); //9, also counts the empty spaces

String.prototype.trueLength = function () {
  console.log(`this name ${this}`);

  return this.trim().length; //this doesn't count the empty spaces
};

const resultStr = userName.trueLength();
console.log('result is', resultStr);

'abcsdsd             '.trueLength(); //prints 7, now the trueLength method is available to all strings
