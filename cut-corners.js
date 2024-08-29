// Custom round function that behaves like Math.round()
function round(num) {
    if (num >= 0) {
      const integerPart = getIntegerPart(num);
      const decimalPart = num - integerPart;
      // Round up if decimal part is 0.5 or more, otherwise round down
      return decimalPart >= 0.5 ? integerPart + 1 : integerPart;
    } else {
      const integerPart = getIntegerPart(-num);
      const decimalPart = -num - integerPart;
      // For negative numbers, adjust rounding correctly
      return decimalPart <= -0.5 ? -integerPart - 1 : -integerPart;
    }
  }
  
  // Custom ceil function that behaves like Math.ceil()
  function ceil(num) {
    if (num >= 0) {
      const integerPart = getIntegerPart(num);
      // Round up if there's any decimal part
      return num > integerPart ? integerPart + 1 : integerPart;
    } else {
      return -getIntegerPart(-num);
    }
  }
  
  // Custom floor function that behaves like Math.floor()
  function floor(num) {
    if (num >= 0) {
      const integerPart = getIntegerPart(num);
      return integerPart;
    } else {
      const integerPart = getIntegerPart(-num);
      // Always round down for negatives
      return -integerPart - (num < -integerPart ? 1 : 0);
    }
  }
  
  // Custom trunc function that behaves like Math.trunc()
  function trunc(num) {
    return num >= 0 ? getIntegerPart(num) : -getIntegerPart(-num);
  }
  
  // Helper function to get the integer part of a number without conversion
  function getIntegerPart(num) {
    let intPart = 0;
    while (intPart <= num) {
      intPart++;
    }
    return intPart - 1;
  }
  
  // Testing the functions with the provided input
//   const nums = [Math.PI, -Math.PI, Math.E, -Math.E, 0];
//   console.log(nums.map(round)); // Expected Output: [3, -3, 3, -3, 0]
//   console.log(nums.map(floor)); // Expected Output: [3, -4, 2, -3, 0]
//   console.log(nums.map(trunc)); // Expected Output: [3, -3, 2, -2, 0]
//   console.log(nums.map(ceil));  // Expected Output: [4, -3, 3, -2, 0]
  