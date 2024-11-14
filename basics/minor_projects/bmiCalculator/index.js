const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const weight = parseInt(document.getElementById('weight').value);
  const height = parseInt(document.getElementById('height').value);

  const withoutParsedWeight = document.getElementById('weight').value;
  const withoutParsedHeight = document.getElementById('height').value;
  console.log('weight type', typeof weight);
  console.log('height type', typeof height);

  const bmiResult = document.getElementById('bmiResult');
  const result = parseInt((weight / (height / 100) ** 2).toFixed(2));
  let categoryResult = '';

  if (result <= 18.5) {
    categoryResult = 'underweight';
  } else if (result >= 18.5 && result <= 24.9) {
    categoryResult = 'normal';
  } else if (result >= 25 && result <= 29.9) {
    categoryResult = 'overweight';
  } else {
    categoryResult = 'obesity';
  }
  const addText = `Your BMI is : ${(weight / (height / 100) ** 2).toFixed(
    2
  )} ${categoryResult}`;
  const resultText = document.createTextNode(addText);

  if (withoutParsedHeight.length > 0 || withoutParsedWeight.length > 0) {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((singleInput) => (singleInput.value = ''));
    bmiResult.appendChild(resultText);
  } else {
    bmiResult.innerText = '';
  }

  e.preventDefault();
});
