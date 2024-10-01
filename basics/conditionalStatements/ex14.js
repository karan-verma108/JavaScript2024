const isEligibleToVote = (age, isCitizen, isRegistered) => {
  if (!isCitizen) {
    console.log('You are not eligible to vote due to citizenship statue');
  } else if (!isRegistered) {
    console.log('You are not eligible to vote due to registeration issue');
  } else if (age < 18) {
    console.log('You cannot vote due to age being less than 18');
  } else {
    console.log('You can vote');
  }
};
isEligibleToVote(19, true, false);
