const createButton = document.getElementById('createButton');
const inputs = document.querySelectorAll('.inputs');

createButton.addEventListener('click', (e) => {
  const errorMessage = document.getElementById('errorMessage');
  const bgColorInput = document.getElementById('bgColorInput').value;
  const textColor = document.getElementById('textColor').value;
  const buttonLabelInput = document.getElementById('buttonLabelInput').value;
  const btnRadius = document.getElementById('btnRadius').value;
  const btnPadding = document.getElementById('btnPadding').value;

  const newBtn = document.createElement('button');
  const buttonsContainer = document.querySelector('.buttonsContainer');

  if (
    bgColorInput.length > 0 &&
    textColor.length > 0 &&
    buttonLabelInput.length > 0 &&
    btnRadius.length > 0 &&
    btnPadding.length > 0
  ) {
    newBtn.style.color = textColor;
    newBtn.innerText = buttonLabelInput;
    newBtn.style.backgroundColor = bgColorInput;
    newBtn.style.padding = btnPadding;
    newBtn.style.borderRadius = btnRadius;

    buttonsContainer.appendChild(newBtn);
    inputs.forEach((individualInput) => (individualInput.value = ''));
  } else if (
    bgColorInput.length === 0 ||
    textColor.length === 0 ||
    buttonLabelInput.length === 0 ||
    btnRadius.length === 0 ||
    btnPadding.length === 0
  ) {
    errorMessage.innerText = 'Please enter all the values';
  }
  e.preventDefault();
});
