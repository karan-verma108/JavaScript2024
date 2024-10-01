//sort numbers in an array using sort compare

const arr = [1, 9, 3, 2, 8, 7];

// arr.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

// console.log(arr);

//if we want in descending order

// arr.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });

// console.log(arr);

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr);
