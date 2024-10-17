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

console.log(returnSecondValue(numberArr));
