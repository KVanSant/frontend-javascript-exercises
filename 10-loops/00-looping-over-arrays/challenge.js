module.exports.sumNumbers = function(array) {
   var sum = 0;
    for (i = 0; i < array.length; i++) {
          sum += array[i]; 
        }
    return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
    return inputString.toLowerCase().split(',');
};


module.exports.addIndex = function(array) {
  var newString = [];
  for (var index = 0; index < array.length; index++) {
    newString.push(index + " is "  + array[index]);
  }
  return newString;
}