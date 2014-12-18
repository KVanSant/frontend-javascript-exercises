module.exports.getKeys = function(obj) {
  var keys = [];
  for(var key in obj){
     keys.push(key);
  }
    return keys;
};

module.exports.getValues = function(obj) {
  var array = [];
  for (var value in obj) {
    array.push(obj[value]);
  }
  return array;
};


module.exports.objectToArray = function(obj) {
  var array = [];
  for (var key in obj) {
    array.push(key + " is " + obj[key]);
  }
  return array;
};