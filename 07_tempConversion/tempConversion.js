const convertToCelsius = function(farenTemp) {
  let celsiusResult = (farenTemp - 32) * (5 / 9);
  celsiusResult = Math.round(celsiusResult * 10) / 10;
  return celsiusResult;
};

const convertToFahrenheit = function(celsiusTemp) {
  let farenResult = (celsiusTemp * (9 / 5)) + 32;
  farenResult = Math.round(farenResult * 10) / 10;
  return farenResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
