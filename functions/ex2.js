// IIFE - Immediately Invoked Function Expression

let result = (function (a, b) {
  console.log(a + b);
  return a + b;
})(4, 5); //invoken immediatley (automatically)

console.log(`the result is ${result}`); //invoked manually
