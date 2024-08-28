// Custom round function that mimics Math.round()
function round(num) {
    // Separate the integer and decimal parts manually
    const integerPart = num >= 0 ? ~~num : -~~-num; // Integer part without conversion functions
    const decimalPart = num - integerPart; // Find the fractional part
    
    // Round based on the value of the fractional part
    if (num >= 0) {
      return decimalPart >= 0.5 ? integerPart + 1 : integerPart;
    } else {
      return decimalPart <= -0.5 ? integerPart - 1 : integerPart;
    }
  }
  
  // Custom ceil function that mimics Math.ceil()
  function ceil(num) {
    const integerPart = num >= 0 ? ~~num : -~~-num;
    // Add 1 only if there's a positive fractional part
    return num > integerPart ? integerPart + 1 : integerPart;
  }
  
  // Custom floor function that mimics Math.floor()
  function floor(num) {
    const integerPart = num >= 0 ? ~~num : -~~-num;
    // Subtract 1 only if there's a negative fractional part
    return num < integerPart ? integerPart - 1 : integerPart;
  }
  
  // Custom trunc function that mimics Math.trunc()
  function trunc(num) {
    // Simply keep the integer part based on the sign
    return num >= 0 ? ~~num : -~~-num;
  }
  
  // Testing the functions with the provided input
//   const nums = [3.7, -3.7, 3.1, -0.1];
//   console.log(nums.map(round)); // Output: [ 4, -4, 3, -3 ]
//   console.log(nums.map(floor)); // Output: [ 3, -4, 3, -4 ]
//   console.log(nums.map(trunc)); // Output: [ 3, -3, 3, -3 ]
//   console.log(nums.map(ceil));  // Output: [ 4, -3, 4, -3 ]
  