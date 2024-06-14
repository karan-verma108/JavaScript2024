// JavaScript Program to Display the Multiplication Table

const printTable = (tableNumber) => {
  if (tableNumber <= 0) {
    console.log('please enter table number greater than 0');
  } else {
    for (let i = 1; i <= 10; i++) {
      console.log(`${tableNumber} * ${i} = ${tableNumber * i}`);
    }
  }
};

printTable(-2);
