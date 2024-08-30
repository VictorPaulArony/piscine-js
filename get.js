
// const src = { nested: { key: 'peekaboo',city: 'New York',
// zip: '10001' } }
// const path = 'nested.city'
export const tests = [];
const t = (f) => tests.push(f);

// Define the vowels regular expression
const vowels = /[aeiou]/i;

function vowelDots(str) {
    return str.replace(vowels, '$&.');
}
/*
Split the path string into parts to navigate through the object.
Iterate over these parts, drilling down into the object step by step.
Return the value if the path exists, or undefined if it doesn't.
*/
// console.log(get(src, path))