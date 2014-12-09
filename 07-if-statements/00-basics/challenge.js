module.exports.favoriteNumber = function(fav, guess) {
  if (guess > fav) {
    return "Too high";
  } 
  else if (guess === fav) {
    return "You got it!";
  }
  else {
    return "Too low";
  }
};

module.exports.checkLock = function(first, second, third, fourth) {
  if (first != 3 && first != 5 && first !=7) {
    return "incorrect";
  }
  else if (second != 2) {
    return "incorrect";
  }
  else if (third < 5 || third > 100) {
    return "incorrect";
  }
  else if (9 <= fourth && fourth <= 20) {
    return "incorrect";
  }
  else {
    return "correct";
  }
};

module.exports.canIGet = function(item, money) {
  if (item == "MacBook Air" && money >=999){
    return true;
  }
  else if (item == "MacBook Pro" && money >= 1299){
    return true;
  }
  else if (item == "Mac Pro" && money >= 2499){
    return true;
  }  
  else if (item == "Apple Sticker" && money >= 1){
    return true;
  }
  else {
    return false;
  }
  
  };

