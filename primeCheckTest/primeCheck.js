module.exports = {

  primePrint: function () {
    var newArr = [];
    for(var i=1; i <= 100 ; i++) {
      var isPrime = true;
      for(var j= 2; j< i; j++) {
        if(i % j === 0) {
          isPrime = false;
        } 
      }
      if(isPrime === true) {
        newArr.push(i);
      }
    }
    return newArr;
  }
  
}


