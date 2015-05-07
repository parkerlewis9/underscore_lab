module.exports = {

  palCheck: function(string) {
    var arr = string.split("");
    var newArr= [];
    for (var i=arr.length-1; i>=0; i--) {
      newArr.push(arr[i]);
    }
    var output = newArr.join('');
    if(string === output) {
      return true;
    } else {
      return false
    }
  }
//   console.log(output);
}
// palCheck("bob")