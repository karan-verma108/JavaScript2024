class Solution {
  // Function to find the missing number in the array.
  missingNumber(arr) {
    let result;

    const firstElement = arr[0];
    const secondElement = arr[1];

    //let's check if the array is ordered or not

    if (arr.length > 1) {
      for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr.length - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }

      for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] > 1) {
          const lastElement = arr[arr.length - 1];

          const actualSum = (lastElement * (lastElement + 1)) / 2;
          let sumWithoutMissingNum = 0;

          for (let i = 0; i <= arr.length - 1; i++) {
            sumWithoutMissingNum += arr[i];
          }
          result = actualSum - sumWithoutMissingNum;
          break;
        } else {
          result = arr[arr.length - 1] + 1;
        }
      }
    } else {
      result = arr.length + 1;
    }

    return result;
  }
}

const firstSolution = new Solution();
console.log(firstSolution.missingNumber([2, 3]));
const secondSolution = new Solution();
// console.log(secondSolution.missingNumber([8, 2, 4, 5, 3, 7, 1]));
const thirdSolution = new Solution();
// console.log(thirdSolution.missingNumber([1]));
