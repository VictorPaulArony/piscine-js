// function deepCopy (obj){
//     return JSON.parse(JSON.stringify(obj))
// }

function deepCopy(original) {
    if (Array.isArray(original)) {
      const copy = [];
      for (const [index, value] of original.entries()) {
        copy[index] = deepCopy(value);
      }
      return copy;
    } else if (typeof original === 'object' && original !== null) {
      const copy = {};
      for (const [key, value] of Object.entries(original)) {
        copy[key] = deepCopy(value);
      }
      return copy;
    } else {
      // Primitive value: atomic, no need to copy
      return original;
    }
  }