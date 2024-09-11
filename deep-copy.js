// function deepCopy (obj){
//     return JSON.parse(JSON.stringify(obj))
// }

function deepCopy(obj) {
    // Check if the input is an object or an array
    if (obj && typeof obj === 'object') {
      // Handle regular expressions
      if (obj instanceof RegExp) {
        return new RegExp(obj);
      }
  
      // Handle dates
      if (obj instanceof Date) {
        return new Date(obj);
      }
  
      // Create an array or object to hold the values
      const copy = Array.isArray(obj) ? [] : {};
  
      // Recursively copy each property
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          copy[key] = deepCopy(obj[key]);
        }
      }
  
      return copy;
    }
  
    // If the input is a function, return it as is
    if (typeof obj === 'function') {
      return obj;
    }
  
    // If the input is not an object, array, or function, return it as is (primitive value)
    return obj;
  }


// Test cases
// const originalArray = [1, 2, { a: 3, b: [4, 5] }];
// const copiedArray = deepCopy(originalArray);
// console.log(copiedArray); // [1, 2, { a: 3, b: [4, 5] }]
// console.log(copiedArray === originalArray); // false
// console.log(copiedArray[2] === originalArray[2]); // false

// const originalObject = { x: 1, y: { z: 2, w: [3, 4] } };
// const copiedObject = deepCopy(originalObject);
// console.log(copiedObject); // { x: 1, y: { z: 2, w: [3, 4] } }
// console.log(copiedObject === originalObject); // false
// console.log(copiedObject.y === originalObject.y); // false