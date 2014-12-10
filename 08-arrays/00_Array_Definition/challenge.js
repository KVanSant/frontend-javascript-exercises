module.exports.newArray = function(one, two, three, four){
  return [one, two, three, four];
};
  


module.exports.firstAndLast = function(array){
  var lastElementIndex = array.length - 1;
  return [array[0], array[lastElementIndex]];
}