//stack memory (used for primitive data types : number, string, boolean, bigInt, symbol, undefined, null)

let nameOne = 'john cena';
let nameTwo = nameOne; //nameTwo gets a copy of the nameOne variable

nameTwo = 'the rock'; //copied nameTwo variable is updated,
// console.log(nameOne); //original nameOne variable remains the same
// console.log(nameTwo);

//heap memory

const obj1 = {
  name: 'sabse acha ladka',
  age: 20,
};

const obj2 = obj1; // obj2 gets a direct refernce to the obj1 object's memory
obj2.age = 30; //updating property of obj2's age, is also updated in the obj1 object (because obj2's memory is directly refering to obj1's memory)
// console.log(obj2.age);
// console.log(obj1.age);

const gameName = new String('dragon ball z');
// console.log(gameName.toUpperCase());
// console.log(gameName); //since we only got the copy of the original variable's value, so it remains the same (stack memory)

// substr

// console.log(gameName.substring(0, 4));
// console.log(gameName.substring(4, 0)); //if start > end then swap the indices , so it becomes 0, 4
// console.log(gameName.slice(4, 0)); //if start > end then return empty string/array

console.log(gameName.replace('z', 'x')); //replaces the specified string by another given in the same function
console.log(gameName.split(' '));
