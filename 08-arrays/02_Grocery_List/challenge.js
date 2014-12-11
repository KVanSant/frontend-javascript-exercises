module.exports.addItem = function(item, array) {
  if (item != array){
    array.push(item);
  }
  return array
};

module.exports.reverseSortedList = function(array) {
  return array.sort(), array.reverse();
};