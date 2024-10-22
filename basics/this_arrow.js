const myObj = {
  course: 'Master JavaScript',
  price: 999,
  showPrice() {
    console.log(`The course is ${this.course} and its price is ${this.price}`);
  },
};

// myObj.showPrice();

//lets try to print this keyword in a regular function,
// function one() {
//   const userName = 'john cena';
//     console.log(this); //we get so many methods of this keyword
//   console.log(this.userName); //lets try to access this username variable, it gave undefined
// }

// const one = function () {
//   const userName = 'john cena';
//   console.log(this); //we get so many methods of this keyword
//   console.log(this.userName); //still gives undefined
// };

const one = () => {
  const userName = 'john cena';
  console.log(this); //we get so many methods of this keyword
  console.log(this.userName); //still gives undefined
};

// one();

const myObj2 = {
  userName: 'the rocky123',
  age: 45,
  papaFun() {
    const userName = 'main rocky'; //this variable wont get printed, as this keyword is referring to its surrounding scope(lexical binding, the parent enviornmnet, in this case, the parent object)
    const greeting = () => console.log(`greetings to ${this.userName}`); //here this keyword is referring to its surrounding scope (lexical binding, the myth that this keyword doesn't work in arrow functions has been proved wrong)
    greeting();
  },
};

myObj2.papaFun();
