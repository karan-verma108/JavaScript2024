const form = document.querySelector('.parentContainer');
form.addEventListener('submit', (e) => {
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  const bmiResult = document.getElementById('bmiResult');
  const addText = `Your BMI is : ${(weight / (height / 100) ** 2).toFixed(2)}`;
  const resultText = document.createTextNode(addText);
  bmiResult.appendChild(resultText);

  e.preventDefault();
});
