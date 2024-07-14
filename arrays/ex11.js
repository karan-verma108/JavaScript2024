//write a js function that calculates the total price of items in a shopping cart. The function should take an array of item prices as input and return the total price.

const totalPrice = (priceArray) => {
  return priceArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

const result = totalPrice([120, 100, 50]);
console.log(result);

/*using forEach
 let total = 0;
 priceArray.forEach((currentValue) => {
   total += currentValue;
 });
 return total; */
