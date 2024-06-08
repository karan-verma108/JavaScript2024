// JavaScript Program to Check Prime Number

// const number = 7;
// let isPrime = true;

// if (number === 1) {
//   console.log(`${number} is neither a prime nor composite number`);
// } else if (number > 1) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(`${number} is a prime number`);
//   } else {
//     console.log(`${number} is not a prime number`);
//   }
// }

// another way

const isPrimeNumber = (num) => {
  let isPrime = true;
  if (num < 0) {
    console.log('num is less than 0, please enter a greater number');
  } else if (num === 1) {
    console.log(
      'num is equal to 1, which is neither a prime number nor a composite number'
    );
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(`${num} is a prime number`);
    } else {
      console.log(`${num} is not a prime number`);
    }
  }
};

isPrimeNumber(1);
