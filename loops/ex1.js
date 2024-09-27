// simple program to print first 10 numbers using different loops in 2024 new method

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//table of a number using while loop

const multiplicationTable = (num) => {
  let i = 1;
  while (i <= 10) {
    console.log(`${num} * ${i} = ${num * i}`);
    i++;
  }
};

multiplicationTable(11);
