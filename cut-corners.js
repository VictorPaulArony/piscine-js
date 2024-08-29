
function round(num) {
    const integerPart = num >= 0 ? getIntegerPart(num) : -getIntegerPart(-num)
    const decimalPart = num - integerPart
    if (num >= 0) {
      return decimalPart >= 0.5 ? integerPart + 1 : integerPart
    } else {
      return decimalPart <= -0.5 ? integerPart - 1 : integerPart
    }
  }
  
  
  
  function ceil(num) {
    const integerPart = num >= 0 ? getIntegerPart(num) : -getIntegerPart(-num)
    return num > integerPart ? integerPart + 1 : integerPart
  }
  
 
  function floor(num) {
    const integerPart = num >= 0 ? getIntegerPart(num) : -getIntegerPart(-num)
    return num < integerPart ? integerPart - 1 : integerPart;
  }
  
  
  
  function trunc(num) {
    return num >= 0 ? getIntegerPart(num) : -getIntegerPart(-num)
  }
  
  
  function getIntegerPart(num) {
    let result = num;
    while (result >= 1) {
      result -= 1;
      result-- 
    }
    return num - result
  }
  
  // Testing the functions with the provided input
//   const nums = [3.7, -3.7, 3.1, -3.1];
//   console.log(nums.map(round)); // Output: [ 4, -4, 3, -3 ]
//   console.log(nums.map(floor)); // Output: [ 3, -4, 3, -4 ]
//   console.log(nums.map(trunc)); // Output: [ 3, -3, 3, -3 ]
//   console.log(nums.map(ceil));  // Output: [ 4, -3, 4, -3 ]
  