const emptyArr = [];

for (let i = 1; i <= 1000; i++) {
  emptyArr.push(String(i));
}

// console.log(emptyArr);
// console.log(typeof emptyArr[0]);

const result = emptyArr.filter((currentNumber) => {
  return (
    currentNumber.length >= 2 &&
    (currentNumber[0] === currentNumber[1] ||
      currentNumber[0] === currentNumber[2] ||
      currentNumber[1] === currentNumber[2])
  );
});

// console.log(result);
const newResult = result.map((currentNumber) => Number(currentNumber));
console.log(newResult);
