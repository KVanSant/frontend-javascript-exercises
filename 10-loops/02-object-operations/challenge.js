module.exports.copy = function(object) {
  var newObject = {};
  for (data in object) {
    newObject[data] = object[data]
  }
  return newObject;
};

module.exports.extend = function(dest, src) {
  for (keys in src) {
    dest[keys] = src[keys];
  }
  return dest;
};

module.exports.hasElems = function(object, array) {
  for (var i = 0; i < array.length; i++) {
    if (!object[array[i]]) {
      return false; 
     }
  }
  return true
};

 
