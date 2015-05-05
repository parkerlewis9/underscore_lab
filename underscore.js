// PUT YOUR CODE HERE!!!
var _ = (function() {

return {

// Average
average: function(data) {
      var sum = 0;
      for(i=0; i<data.length; i++) {
        sum += data[i];
        
    	}
      return sum/data.length;

    },
    
// Contains

contains: function(array, value) {
      for(var i=0; i<array.length; i++) {
        if (array[i] === value) {
          return true;
        }
      }
    },
    
// Confirm
confirm: function(array, num) {
      for(i=0; i<array.length; i++) {
        if(array[i] === num) {
          return true;
        } else {
          return false;
        }
      }
      
    },

// First

first: function(array){
      var fir= array[0];
      return fir;
    },

// Last
last: function(array){
      var last= array[array.length-1];
      return last;
    },

// Max
max: function(array){
      var possimax = array[0];
      for(var i=0; i<array.length; i++) {
      possimax = Math.max(possimax, array[i]);
      
      }
      return possimax;
    },


// Min
min: function(array){
      var possimin = array[0];
      for(var i=0; i<array.length; i++) {
      possimin = Math.min(possimin, array[i]);
      
      }
      return possimin;
    },

// Shuffle
shuffle: function(array) {
      
      for(i=0; i<array.length; i++) {
        var tempI= array[i];
        var randomNum= Math.floor(Math.random()* array.length);
        var tempR = array[randomNum];
        array[i]= tempR;
        array[randomNum]=tempI;
      }
      
      return array;
//end of function(array)
    },

// Sample
sample: function(array, length) {
      
// set up what happens when length is left off (optional parameter)
      
      if (length === undefined) {
        return array[Math.floor(Math.random()*array.length)];
        
// now what happens when you have a length. We are going to first randomize it.
        
      } else {
        for(i=0; i<array.length; i++) {
          var tempI= array[i];
          var randomNum= Math.floor(Math.random()* array.length);
          var tempR = array[randomNum];
          array[i]= tempR;
          array[randomNum]=tempI;
        }
// Then cut off a portion of size length to then return.   
        return array.splice(0, length) 
      }
      
//end of function 
    },

// Difference
difference: function(firstArray, secondArray) {
      var newArray= [];
      for (i=0; i<secondArray.length; i++) {
        for(j=0; j<firstArray.length; j++) {
          if (firstArray[j] === secondArray[i]) {
            firstArray.splice(j,1);
          }
        }
      }
      return firstArray;
      
      
  },

// indexOf
indexOf: function(array, value) {
      for(var i= 0; i<array.length; i++) {
        
        var output = -1;
        if (array[i] === value) {
          return i;
        }
        
      }
      return output;
  },
  
// Pluck
pluck: function(array, key) {
      var newArr = [];
      for (i=0; i<array.length; i++) {
        var myObj= array[i];
        var keyValue= myObj.key;
// when I put in myObj.name it works as it should so I don't understand why when I put parameter key in it doesn't.
        newArr[i] = keyValue;
      }
      return newArr;
   
//end of function
    },

// Each
each: function(array, func) {
      for (var i=0; i<array.length; i++) {
        func(array[i]);
      }
      
    },


// Compact

compact: function(array) {
      
      var newArr = [];
      for(var i=0; i<array.length; i++) {
        if(array[i]) {
          newArr.push(array[i]);
        }
        
      }
      return newArr;
    },

// Map
map: function(arr, func) {
      var newArr= [];
      for(var i=0; i<arr.length; i++) {
        var val= func(arr[i]);
        newArr.push(val);
      }
      return newArr;
      
// End of function
    },
// Filter
filter: function(arr, func) {
      var myArr = [];
      for(var i=0; i < arr.length; i++) {
        
        if (func(arr[i]) === true) {
          myArr.push(arr[i]);
        }
      }
      return myArr;
      
    },





  };
  
   
})();