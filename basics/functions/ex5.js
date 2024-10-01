// default paramater

const sum = (a = 3, b = 9) => {
  return a + b;
};

const result1 = sum();
const result2 = sum(8);
console.log(result2);
