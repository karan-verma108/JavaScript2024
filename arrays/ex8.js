//convert mintues into seconds

const minToSec = (minutes) => {
  if (minutes <= 0) {
    return 'Please enter value greater than 0';
  } else {
    return minutes * 60;
  }
};

const result = minToSec(-33);
console.log(result);
