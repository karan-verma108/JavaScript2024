const form = document.querySelector('form');
const enteredNumRef = document.getElementById('enteredNum');
const btn = document.getElementById('btn');
const randomNum = Math.floor(Math.random() * 100) + 1;
let totalGuess = 10;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const remainingGuesses = document.getElementById('remainingGuesses');
  const previousGuesses = document.getElementById('previousGuesses');
  const enteredNum = parseInt(document.getElementById('enteredNum').value);
  const result = document.getElementById('result');
  console.log('random', randomNum);

  enteredNumRef.value = '';

  if (totalGuess >= 1 && !isNaN(enteredNum)) {
    if (enteredNum === randomNum) {
      enteredNumRef.disabled = true;
      btn.disabled = true;
      const resultText = document.createTextNode(
        `Congrats! you won!  Your guess = ${enteredNum} and random number = ${randomNum}`
      );
      result.appendChild(resultText);
    } else {
      result.innerHTML = '';
      const previousGuessText = document.createTextNode(enteredNum);
      previousGuesses.appendChild(previousGuessText);
      previousGuesses.appendChild(document.createTextNode(','));
    }
    totalGuess--;
    remainingGuesses.innerText = totalGuess;
  }
});
