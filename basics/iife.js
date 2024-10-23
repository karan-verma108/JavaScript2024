// lets understand IIFE (Immeditely Invoked Function Expression)

(function firstFn() {
  console.log('im the first IIFE function'); //this is a named IFFE
})();

// lets make an anonymous IFFE

(function () {
  console.log('im the anonymous IIFE');
})();

// lets make an IFFE with arrow function and also pass a parameter

((funcionName) => {
  console.log(`im an IIFE created with ${funcionName} function`);
})('arrow');

// IIFE helps prevent global variable pollution, as the variables defined inside an IIFE will only be accessible from inside the function, not from the global scope, so no collision with global scoped variables
