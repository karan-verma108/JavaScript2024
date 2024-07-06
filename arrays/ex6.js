const products = [
  {
    name: 'Laptop',
    price: 1200,
  },
  {
    name: 'Phone',
    price: 800,
  },
  {
    name: 'Tablet',
    price: 300,
  },
  {
    name: 'Smartwatch',
    price: 150,
  },
];

const result = products
  .filter((currElem) => currElem.price < 500)
  .map((currElem) => {
    return currElem.name; 
  });

console.log(result);
