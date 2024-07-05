// console.log('welocome to JavaScript 2024');

//convert string to a number
let str = '4';
// console.log(typeof +str);             first way
// console.log(typeof Number(str));       second way

//convert number to a string

let num = 55;
// console.log(typeof num);
// console.log(typeof num.toString());      first way
// console.log(typeof String(num));        //second way
// console.log(typeof (num + ''));           //third way

//another way to convert string to number is using parseInt

// let myStr = '43';
// console.log(typeof parseInt(myStr));

// but if we have something like this, then parseInt doesn't work as expected
let myStr = '43.6';
// console.log(parseFloat(myStr));         //then we use parseFloat

// let's check the type of this
// console.log(typeof ('9' - 4));

// console.log('java' - 'script');

// true = 1, false = 0
// console.log(true + true);
// console.log(true + false);
// console.log(false + false);
// console.log(false - true);

// what will be the output of this,

// let result = 0.1 + 0.2;
// console.log(result.toFixed(1));

function a() {
  ba();
  function ba() {
    console.log(b);
  }
}

let b = 4;
a();
