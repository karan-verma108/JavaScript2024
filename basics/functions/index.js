const userIsLogged = (userName = 'rocky') => {
  return `${userName ?? ''} just logged in!`;
};

const result = userIsLogged();
console.log(result);
