//lets first see shallow copy which can be created easily by using spread operators

const myOriginalArr = ['roy', 'sheena', 'john'];

const myShallowArr = [...myOriginalArr]; //myShallowArr directly refers to the properties of its source array, which in this case is myOriginalArr

console.log('myOrigianlArr', myOriginalArr);
console.log('myShallowArr', myShallowArr);

//now if i change anything in either of the arrays, most importantly, in the myShallowArr, it will also reflect in the myOriginalArr, because myShallowArr is a shallow copy

myShallowArr[0] = 'rohan';

console.log('myOrigianlArr after changing the shallow arr', myOriginalArr);
console.log('myShallowArr after changing the shallow arr', myShallowArr);
