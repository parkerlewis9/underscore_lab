module.exports = {
	reverse: function(string) {
	  var arr = string.split("");
	  var newArr= [];
	  for (var i=arr.length-1; i>=0; i--) {
	    newArr.push(arr[i]);
	  }
	  var output = newArr.join('');
	  return output;
	}
}
// reverse("The dog barked loudly")