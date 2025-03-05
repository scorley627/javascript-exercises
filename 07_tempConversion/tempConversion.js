const convertToCelsius = function(tempInF) {
  let tempInC = (tempInF - 32) * 5 / 9;
  if (!Number.isInteger(tempInC)) tempInC = Number(tempInC.toFixed(1));
  return tempInC;
};

const convertToFahrenheit = function(tempInC) {
  let tempInF = tempInC * 9 / 5 + 32;
  if (!Number.isInteger(tempInF)) tempInF = Number(tempInF.toFixed(1));
  return tempInF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
