export const tests = [];
const t = (f) => tests.push(f);

// Define the vowels regular expression
const vowels = /[aeiou]/i;

function vowelDots(str) {
    return str.replace(vowels, '$&.');
}

/*
Regular Expression: The correct regular expression /[aeiou]/g matches any of the vowels (a, e, i, o, u) in the string.

String Replacement:

The replace() method is used to replace each matched vowel.
The '$&.' in the replace() method means "take the matched vowel ($&) and add a dot after it".

console.log(vowelDots('hello world'))
*/