// convert age (years) to days

const ageYearsToDays = (ageInYears) => {
  if (ageInYears <= 0) {
    return 'Please enter a valid age';
  }
  return ageInYears * 366;
};

const result = ageYearsToDays(-2);
console.log(result);
