// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // primitaves: string
  if (typeof obj === "string") {
    return '"' + obj + '"';
  }
  //primatives: num & null
  else if (typeof obj === "number" || obj === null || typeof obj === "boolean") {
  	return "" + obj;
  }

  //array
  else if (Array.isArray(obj)) {
  	var arr = [];
  	if (obj.length === 0) {
  	  return "[]";
  	} else {
      obj.forEach(function(item) {
      	arr.push(stringifyJSON(item));
      });
  	}
  	return "[" + arr + "]";
  }

  //object
  else if (typeof obj === "object") {
    var keyValPairs = [];
    for (var key in obj) {
      if (typeof obj[key] === "undefined" || typeof obj[key] === "function") {
      	continue;
      }
      keyValPairs.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
    }
    return "{" + keyValPairs + "}";
  }
};
