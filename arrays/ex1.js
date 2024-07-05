// perform CRUD operation on an array

const myArray = [2, 3, 6, 9];

//adding new data at the very end

myArray.push(22);

//deleting data from the very end

myArray.pop();

// removing data from the very beginning

myArray.shift();

//adding data to the very beginning

myArray.unshift(100);

// replacing data from any index in the array

myArray.splice(1, 1, 300);

console.log(myArray);
