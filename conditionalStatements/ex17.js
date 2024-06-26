// area of shapes using switch statement

//area of triangle -> length * width
//area of circle -> pie * (r*r)
// area of square -> side * side

// const length = 5;
// const width = 6;
// const side = 9;
// const radius = 3;

// const areaOfShape = 'circle';

// switch (areaOfShape) {
//   case 'circle':
//     console.log(
//       `The area of circle is ${length} * ${width} = ${length * width}`
//     );
//     break;
//   case 'triangle':
//     console.log(
//       `The area of triange is ${Math.PI.toFixed(
//         2
//       )} * (${radius} * ${radius}) = ${(Math.PI * radius * radius).toFixed(2)}`
//     );
//     break;
//   case 'square':
//     console.log(`The area of square is ${side} * ${side} = ${side * side}`);
//     break;
//   default:
//     console.log('Please enter a recognizable shape');
// }

const findAreaByShare = (shape, length, width, side, radius) => {
  switch (shape) {
    case 'circle':
      console.log(
        `The area of ${shape} is ${length} * ${width} = ${length * width}`
      );
      break;
    case 'triangle':
      console.log(
        `The area of ${shape} is ${Math.PI.toFixed(
          2
        )} * (${radius} * ${radius}) = ${(Math.PI * radius * radius).toFixed(
          2
        )}`
      );
      break;
    case 'square':
      console.log(`The area of ${shape} is ${side} * ${side} = ${side * side}`);
      break;
    default:
      console.log(`Please enter a recognizable shape`);
  }
};

findAreaByShare('triangle', 3, 5, 8, 4);
