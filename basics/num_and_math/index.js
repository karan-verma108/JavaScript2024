const newNum = new Number('32');
// console.log(newNum.valueOf());

const anotherNum = 1000000;
// console.log(anotherNum.toLocaleString());

//guess numbers between 20 and 30

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

const result = random(20, 30);
console.log(result);

// console.log(randomNum <= 20 && randomNum <= 30);

// console.log(Math.min(min, Math.max(max)));
