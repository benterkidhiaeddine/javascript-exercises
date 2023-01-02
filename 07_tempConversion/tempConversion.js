const roundToOneDecimal=function(number){
  result = (Math.round(number * 10)/10);
  return result;

}
const convertToCelsius = function(F) {
  //round the number to 1 decimal
  result = roundToOneDecimal((F - 32) * 5/9 );
  return result;
};

const convertToFahrenheit = function(C) {
  //round the number to 1 decimal
  return roundToOneDecimal((C * 9/5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
  roundToOneDecimal
};
