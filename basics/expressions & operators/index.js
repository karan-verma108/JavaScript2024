// write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and having a valid DL ?
let hasValidLicense;

const checkDrivingLicesceValidity = (age) => {
  return age;
};

const result = checkDrivingLicesceValidity(12);

if (result >= 18) {
  hasValidLicense = true;
  if (hasValidLicense) {
    console.log('You can drive');
  }
} else {
  console.log('You cannot drive');
}
