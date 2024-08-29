
function round(num) {
    if (num >= 0) {
      const integerPart = getIntegerPart(num)
      const decimalPart = num - integerPart
      return decimalPart >= 0.5 ? integerPart + 1 : integerPart;
    } else {
      const integerPart = getIntegerPart(-num);
      const decimalPart = -num - integerPart;
      // Round down if decimal part is -0.5 or less, otherwise round up
      return decimalPart <= -0.5 ? -integerPart - 2 : -integerPart;
    }
  }
  
  function ceil(num) {
    if (num >= 0) {
      const integerPart = getIntegerPart(num)
      return num > integerPart ? integerPart + 1 : integerPart;
    } else {
      return -getIntegerPart(-num);
    }
  }
  
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
  
  function trunc(num) {
    return num >= 0 ? getIntegerPart(num) : -getIntegerPart(-num);
  }
  
  function getIntegerPart(num) {
    let sign = num >= 0 ? 1 : -1
    num = Math.abs(num)
    var res = 0
    var pla = 1
    while(pla <= num){
        pla *= 10
    }
    pla /= 10
    while(pla >= 1){
       while(res + pla <= num){
        res += pla
       }
       pla /= 10
    }
    return res * sign
  }
  
 
  
  
  const nums =  [3, -3, 3, -3, 0];
  console.log(nums.map(round)); // Expected: [3, -3, 3, -3, 0]
  console.log(nums.map(floor)); // Expected: [3, -4, 2, -3, 0]
  console.log(nums.map(trunc)); // Expected: [3, -3, 2, -2, 0]
  console.log(nums.map(ceil));  // Expected: [4, -3, 3, -2, 0]
  