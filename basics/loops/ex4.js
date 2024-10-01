// //create a star/matrix pattern using for loop

// let star = '';
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {}
//   console.log((star += '*'));
// }

// for (let i = 5; i >= 1; i--) {
//   let star = '';
//   for (let j = 1; j <= i; j++) {
//     star += '*';
//   }
//   console.log(star);
// }

let star = '';
for (let i = 8; i >= 1; i -= 2) {
  for (let j = 1; j <= i; j++) {
    star += '*';
  }
  console.log(star);
  star = '';
}
