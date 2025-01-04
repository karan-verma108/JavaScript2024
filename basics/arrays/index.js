// const arr = [3, 4, 5, 6];

//using join method to convert this array into a string (the opposite method is called, split(), which converts a string into an array)
// const newArr = arr.join('');
// console.log(newArr);

// const newArr = [0, 1, 2, 3, 4, 5];
// const n1 = newArr;
// console.log('removed element', n1.splice(1, 3));
// console.log('main arr', n1);

// flat method in array

const congestedArr = [1, 2, 3, [4, 5], 6, [7, [8, 9], 10]];
// console.log(congestedArr); lets use array flat method to flat this array

const flattedArr = congestedArr.flat(2);
// console.log(flattedArr);

const myStr = 'please turn me into an array';
// console.log(Array.isArray(myStr)); //false, checks if the input is an array

const myArrStr = Array.from(myStr); //creates an a new array instance (shalow-copied from an arr-like or iterable object)
const removedArrElements = myArrStr.shift();
const arrLengthByUnShift = myArrStr.unshift('p');
// console.log(arrLengthByUnShift);

// console.log(removedArrElements);

const num1 = 10;
const num2 = 20;
const val3 = true;
const val4 = 'hey';
// console.log(Array.of(num1, num2, val3, val4)); //creates a new array instance from variables

// TWO TYPES OF ARRAYS

// i) continuos (packed) ii) holey]

// A packed array is a type of array in which from array's 0th postion till the last position, there is no holes (empty position) or gaps

/*A) Packed are of three types

i) SMI (small integer)

const arr1 = [1,2,3,4];

ii) double

const arr2 = [1,2,3.0, 4.2];

iii) packed (mix of all types)

const arr3 = [1,'3', null, {}, 5.6]; */

/*B) Holey are also of three types 

Holey arrays are those in which there are some indices where no elements are found hence holes or gaps are created as a result

i) Holey_SMI (small integer)

const arr1 = [1,2,<empty>..., 5];

ii) Holey_double    

const arr2 = [2.3, <empty>..., 0, 4 ];

iii) Holey_packed

const arr3 = [1,3,'9', <empty>..., {}];*/

// THE MOST OPTIMIZED FORM OF ARRAY IS THE SMI ONE (WITHOUT HOLEY)

// Issues with holey arrays

// When trying to find an element that's out of the bound (present out of array's length), it will simply return undefined , this is a one step process so it's considered highly optimized, however, when we take case of holey arrays (with holes or gaps in between the elements) , in that case, not only the javascript performs the bound check on this as to find whether the element is out of bound as to give undefined, now because there are holes/gaps also that's why it is required to check for in between elements as well by using hasOwnProperty() method, so first it uses hasOwnProperty() to the affected array, so this is second step and if it's not able to find that element so as we know javascript has a prototypal behaviour, therefore, it then checks the hasOwnProperty() again on its prototype which is Array object so now it's the third operation being performed for finding the element which may not evern be there in the array, as opposed to using just one step (bound method) to checking the element in packed arrays

// Note : hasOwnProperty() is a costly operation
