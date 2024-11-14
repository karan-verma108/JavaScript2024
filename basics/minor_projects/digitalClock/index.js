setInterval(() => {
  const clockBox = document.querySelector('.clockBox');
  const date = new Date();

  clockBox.innerHTML = date.toLocaleTimeString();
}, 1000);
