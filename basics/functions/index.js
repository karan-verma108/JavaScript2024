const userIsLogged = (userName = 'rocky') => {
  return `${userName ?? ''} just logged in!`;
};

const result = userIsLogged();
// console.log(result);

// use rest operator to recieve n number of arguments

const calculateUserOrders = (...orderPrices) => {
  return orderPrices.reduce((prevValue, currValue) => prevValue + currValue);
};

// console.log(calculateUserOrders(43, 55));

const numberArr = [200, 400, 900, 500];

const returnSecondValue = (numArr) => {
  const [firstNum, secondNum, ...remainingNums] = numArr;
  return secondNum;
};

// console.log(returnSecondValue(numberArr));

console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

// console.log(addTwo(4));  can't access addTwo before initialization

const addTwo = function (num) {
  return num + 2;
};

// addThree(9); //can't access addThree before initialization

const addThree = (num) => {
  return num + 3;
};
