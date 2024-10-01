// fibonacci series

// 0,1,1,2,3,5,8,13,21 etc

const findFibonacci = (num) => {
  if (num <= 2) {
    console.log(`The fibonacci series upto ${num} is`);
    for (let i = 0; i < num; i++) {
      console.log(i);
    }
  } else {
    let sum = 0;
    let firstNum = 0;
    let secondNum = 1;

    console.log(firstNum);
    console.log(secondNum);
    for (let i = 2; i < num; i++) {
      sum = firstNum + secondNum;
      console.log(sum);
      firstNum = secondNum;
      secondNum = sum;
    }
  }
};

findFibonacci(3);
