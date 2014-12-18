
module.exports.stream = function (conditionalFn, actionFn) {
  while (conditionalFn()) {
    actionFn();
  }
};

module.exports.sumNumbers = function(array) {
    var total = 0;
    var i = array.length; 
    while (i--) {
        total += array[i];
    };
    return total;
}