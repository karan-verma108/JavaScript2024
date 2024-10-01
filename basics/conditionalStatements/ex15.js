//prime numbers

let isPrime = true;
const isPrimeNumber = (number) => {
  if (number < 0) {
    console.log('Please enter number greater than 0');
  }

  if (number === 1) {
    console.log(`${number} is a prime number`);
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
    }
  }

  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is not a prime number`);
  }
};

isPrimeNumber(11);
