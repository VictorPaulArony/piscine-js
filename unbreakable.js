// Updated split function to handle cases where separator is an empty string
function split(str, sep) {
    const res = [];
  
    // Special case: separator is an empty string
    if (sep === '') {
      for (let i = 0; i < str.length; i++) {
        res.push(str[i]);
      }
      return res;
    }
  
    let word = '';
    let i = 0;
  
    while (i < str.length) {
      // Check if the substring matches the separator
      if (str.slice(i, i + sep.length) === sep && sep.length > 0) {
        res.push(word); // Push the accumulated word to result
        word = ''; // Reset word
        i += sep.length; // Skip over the length of the separator
      } else {
        word += str[i]; // Accumulate characters
        i++;
      }
    }
  
    // Push the last accumulated word, including trailing empty strings
    res.push(word);
  
    return res;
  }
  
  // Custom join function remains the same
  function join(arr, sep) {
    let res = '';
    for (let i = 0; i < arr.length; i++) {
      if (i > 0) {
        res += sep;
      }
      res += arr[i];
    }
    return res;
  }
  
//   // Test cases
//   console.log(split('hello world', ' ')); // ['hello', 'world']
//   console.log(join(['hello', 'world'], ' ')); // 'hello world'
//   console.log(split('hello,world,this,is,a,test', ',')); // ['hello', 'world', 'this', 'is', 'a', 'test']
//   console.log(join(['hello', 'world', 'this', 'is', 'a', 'test'], '-')); // 'hello-world-this-is-a-test'
//   console.log(split('one-two-three', '-')); // ['one', 'two', 'three']
//   console.log(join(['one', 'two', 'three'], '+')); // 'one+two+three'
//   console.log(split('ggg - ddd - b', ' - ')); // ['ggg', 'ddd', 'b']
//   console.log(split('ee,ff,g,', ',')); // ['ee', 'ff', 'g', '']
//   console.log(split('Riad', '')); // ['R', 'i', 'a', 'd']
  