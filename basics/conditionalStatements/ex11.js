// javascript program to print star pattern

const printStars = (pattern) => {
  for (let i = 1; i <= 5; i++) {
    pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += '*';
    }
    console.log(pattern);
  }
};

printStars(5);
