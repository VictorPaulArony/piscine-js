// Custom round function that mimics Math.round()
function round(num) {
    if (num >= 0) {
      const integerPart = getIntegerPart(num);
      const decimalPart = num - integerPart;
      if (decimalPart > 0.5) {
        return integerPart + 1;
      } else if (decimalPart < 0.5) {
        return integerPart;
      } else { // decimalPart === 0.5
        // Check if integerPart is even or odd
        return isEven(integerPart) ? integerPart : integerPart + 1;
      }
    } else {
      const integerPart = getIntegerPart(-num);
      const decimalPart = -num - integerPart;
      if (decimalPart < -0.5) {
        return -integerPart - 1;
      } else if (decimalPart > -0.5) {
        return -integerPart;
      } else { // decimalPart === -0.5
        // Check if integerPart is even or odd
        return isEven(integerPart) ? -integerPart : -integerPart - 1;
      }
    }
  }
  
  // Helper function to determine if a number is even
  function isEven(num) {
    return num - 2 * Math.floor(num / 2) === 0;
  }
  
  // Custom ceil function that mimics Math.ceil()
  function ceil(num) {
    if (num >= 0) {
      const integerPart = getIntegerPart(num);
      return num > integerPart ? integerPart + 1 : integerPart;
    } else {
      return -getIntegerPart(-num) - 1;
    }
  }
  
  // Custom floor function that mimics Math.floor()
  function floor(num) {
    if (num >= 0) {
      const integerPart = getIntegerPart(num);
      return num < integerPart ? integerPart - 1 : integerPart;
    } else {
      return -getIntegerPart(-num);
    }
  }
  
  // Custom trunc function that mimics Math.trunc()
  function trunc(num) {
    return num >= 0 ? getIntegerPart(num) : -getIntegerPart(-num);
  }
  
  // Efficient helper function to extract the integer part of a number
  function getIntegerPart(num) {
    let intPart = 0;
    while (intPart <= num) {
      intPart++;
    }
    return intPart - 1;
  }
  
  // Testing the functions with the provided input
  const nums = [-3, -3.7, 3.1, -3.1, 0.5];
  console.log(nums.map(round)); // Expected Output: [3, -3, 3, -3, 0]
  console.log(nums.map(floor)); // Expected Output: [ 3, -4, 3, -4 ]
  console.log(nums.map(trunc)); // Expected Output: [ 3, -3, 3, -3 ]
  console.log(nums.map(ceil));  // Expected Output: [ 4, -3, 4, -3 ]
  