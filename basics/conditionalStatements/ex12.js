// Number Guessing Game using JavaScript

const guessNumber = (number) => {
  const randomNum = Math.ceil(Math.random() * 10);
  return randomNum === number
    ? `You Won! You guessed ${number}, while computer guessed ${randomNum}`
    : `You lost! the game, try again! You guessed ${number}, while computer guessed ${randomNum}`;
};

const result = guessNumber(5);
console.log(result);
