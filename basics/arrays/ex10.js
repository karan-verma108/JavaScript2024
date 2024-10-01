// using a map method write a function that takes an array of names and returns a new array where each name is prefixed with Mr

const addMrToName = (arr) => {
  const nameChangedArr = arr.map((currName) => `Mr. ${currName}`);
  return nameChangedArr;
};

const result = addMrToName(['karan', 'paranthe', 'john cena', 'rocky']);
console.log(result);
