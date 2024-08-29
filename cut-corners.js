// Custom round function that mimics Math.round()
function round(num) {
    const integerPart = num >= 0 ? getIntegerPart(num) : -getIntegerPart(-num); // Extract integer part
    const decimalPart = num - integerPart; // Calculate decimal part manually
    if (num >= 0) {
      return decimalPart >= 0.5 ? integerPart + 1 : integerPart;
    } else {
      return decimalPart <= -0.5 ? integerPart - 1 : integerPart;
    }
  }
  
  // Custom ceil function that mimics Math.ceil()
  function ceil(num) {
    const integerPart = num >= 0 ? getIntegerPart(num) : -getIntegerPart(-num); // Extract integer part
    return num > integerPart ? integerPart + 1 : integerPart;
  }
  
  // Custom floor function that mimics Math.floor()
  function floor(num) {
    const integerPart = num >= 0 ? getIntegerPart(num) : -getIntegerPart(-num); // Extract integer part
    return num < integerPart ? integerPart - 1 : integerPart;
  }
  
  // Custom trunc function that mimics Math.trunc()
  function trunc(num) {
    return num >= 0 ? getIntegerPart(num) : -getIntegerPart(-num); // Simply return the integer part
  }
  
  // Efficient helper function to extract the integer part of a positive number without %
  function getIntegerPart(num) {
    let result = num;
    while (result >= 1) {
      result -= 1
      result--
    }
    return num - result; // Subtract the leftover fraction from the original number
  }
  
  // Testing the functions with the provided input
//   const nums = [3.7, -3.7, 3.1, -3.1];
//   console.log(nums.map(round)); // Output: [ 4, -4, 3, -3 ]
//   console.log(nums.map(floor)); // Output: [ 3, -4, 3, -4 ]
//   console.log(nums.map(trunc)); // Output: [ 3, -3, 3, -3 ]
//   console.log(nums.map(ceil));  // Output: [ 4, -3, 4, -3 ]
  