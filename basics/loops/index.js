// basic table using for loop

for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    console.log('deteched 6');
    continue;
  }
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
