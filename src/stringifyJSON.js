// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  console.log('passed in: ', obj);
  var result = '';

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'boolean') {
    return String(obj);
  }
  if (typeof obj === 'number') {
    return String(obj);
  }
  if (typeof obj === 'string') {
    console.log('STRING PASSED IN');
    return '"' + obj + '"';
  }



  if (typeof obj === 'object') {
    console.log("ARRAY PASSED IN");
    if (Array.isArray(obj)) {
      //treat like an true array
      if (obj.length === 0) {
        return '[]';
      } else {
        //recursive case for arrays
        result += '[';
        for (var i = 0; i < obj.length; i++) {
          var lastIndex = obj.length - 1;
          //if its not the last item in the array
          if (i !== lastIndex) {
            result += stringifyJSON(obj[i]) + ',';
          } else {
            //if it is the last item in the array
            result += stringifyJSON(obj[i]);
          }
        }
        result += ']';
      }

      //for objects (not arrays)
    } else {

      if (Object.keys(obj).length === 0) {
        return '{}';
      }
      //treat like an obj
      var lastKey = Object.keys(obj).pop();
      result += '{';
      for (let key in obj) {
        console.log('TYPE:', typeof key);
        //final bit about functions and undefined...
        // if (typeof obj[key] === 'function') {
        //   console.log('WE GOT A FN');
        //   result += {};
        // }
        if (key !== lastKey) {
          result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        } else {
          result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        }
      }
      result += '}';

    }
  }



  //base case: if obj does not have nested content
  //recurssive: if obj has nested content, itterate
  console.log('result: ', result);
  return result;
};
