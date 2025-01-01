const arr1 = [4, 2, 0, 1, 5, 3];

for (let i = 0; i < arr1.length - 1; i++) {
  for (let j = 0; j < arr1.length - 1; j++) {
    if (arr1[i] > arr1[i + 1]) {
      let temp = arr1[i];
      arr1[i] = arr1[i + 1];
      arr1[i + 1] = temp;
    }
  }
}
// console.log(arr1);

//2,4,0,1,5,3
//2,0,4,1,5,3
//2,0,1,4,5,3
//2,0,1,4,5,3
//2,0,1,4,3,5

// 4, 2, 0, 1, 5, 3

/*
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here

const findFactorial = (number) => {
  let result = 1;
  if (number < 1) {
    result = 'Please enter a number greater than 1';
  }

  if (number === 1) {
    result = 1;
  }

  for (let i = number; i >= 1; i--) {
    console.log('this worked');

    result *= i;
  }
  console.log('result inside', result);

  return result;
};

const factorial = findFactorial(10);
console.log(factorial);
