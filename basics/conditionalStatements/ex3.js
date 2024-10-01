const primeNumberRange = (lowerValue, higherValue) => {
  if (lowerValue <= 1 || higherValue <= 1) {
    console.log('please enter value greater than 1');
  }

  for (let i = lowerValue; i < higherValue; i++) {
    let isPrime = true;
    for (let num = 2; num < i; num++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
};

primeNumberRange(3, 30);
