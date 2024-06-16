// JavaScript Program to Convert Celsius to Fahrenheit and vice versa

const calculateTemperature = (converter, temp) => {
  if (converter === 'cToF') {
    console.log(
      `${temp}°C converted to fahrenheit is : ${(temp * 9) / 5 + 32}`
    );
  } else if (converter === 'fToC') {
    console.log(`${temp}°F converted to celsius is : ${((temp - 32) * 5) / 9}`);
  } else {
    console.log('please enter valid converter');
  }
};

console.log(
  'Enter cToF to convert Celsius to Fahrenheit & enter fToC to convert Fahrenheit to Celsius'
);
const result = calculateTemperature('fToC', 107.6);
