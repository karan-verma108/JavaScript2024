// JavaScript Program to Check for Palindrome Number

const isPalindromeNumber = (num) => {
  num = num.toString();
  let arr = [];
  for (let i = num.toString().length - 1; i >= 0; i--) {
    arr.push(num[i]);
  }
  arr = Number(arr.join(''));
  num = Number(num);

  if (num === arr) {
    return true;
  } else {
    return false;
  }
};

const result = isPalindromeNumber(121);

if (result) {
  console.log('it is a palindrome number');
} else {
  console.log('it is not a palindrome number');
}
