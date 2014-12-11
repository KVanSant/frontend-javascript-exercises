module.exports.reversePlusOne = function(array) {
   var arr = array.reverse();
   return array.unshift(1), arr;
};

module.exports.plusesEverywhere = function(array) {
  return array.join('+');
};

module.exports.arrayQuantityPlusOne = function(array) {
  return array.length + 1;
};






