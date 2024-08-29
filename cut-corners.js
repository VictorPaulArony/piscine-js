// Custom round function that mimics Math.round()
function round(num) {
    if (num >= 0) {
      const integerPart = getIntegerPart(num);
      const decimalPart = num - integerPart;
      return decimalPart >= 0.5 ? integerPart + 1 : integerPart;
    } else {
      const integerPart = getIntegerPart(-num);
      const decimalPart = -num - integerPart;
      return decimalPart <= -0.5 ? -integerPart - 1 : -integerPart;
    }
  }
  
  // Custom ceil function that mimics Math.ceil()
  function ceil(num) {
    if (num >= 0) {
      const integerPart = getIntegerPart(num);
      return num > integerPart ? integerPart + 1 : integerPart;
    } else {
      const integerPart = getIntegerPart(-num);
      return -integerPart - 1;
    }
  }
  
  // Custom floor function that mimics Math.floor()
  function floor(num) {
    if (num >= 0) {
      const integerPart = getIntegerPart(num);
      return num < integerPart ? integerPart - 1 : integerPart;
    } else {
      const integerPart = getIntegerPart(-num);
      return -integerPart;
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
//   const nums = [3, -3.7, 3.1, -3.1];
//   console.log(nums.map(round)); // Expected Output: [ 4, -4, 3, -3 ]
//   console.log(nums.map(floor)); // Expected Output: [ 3, -4, 3, -4 ]
//   console.log(nums.map(trunc)); // Expected Output: [ 3, -3, 3, -3 ]
//   console.log(nums.map(ceil));  // Expected Output: [ 4, -3, 4, -3 ]
  