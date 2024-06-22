// write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and having a valid driving license

const isEligibleToDrive = (age) => {
  let hasValidDriverLicense = true;

  if (age >= 18 && hasValidDriverLicense) {
    console.log('You can drive');
  } else {
    console.log('You cannot drive');
  }
};

// isEligibleToDrive(20);
