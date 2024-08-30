function vowelDots(str){
    var vowels = /[aeiou]/g
    var res = str.replace(vowels, '$&.')
    return res 
}

/*
Regular Expression: The correct regular expression /[aeiou]/g matches any of the vowels (a, e, i, o, u) in the string.

String Replacement:

The replace() method is used to replace each matched vowel.
The '$&.' in the replace() method means "take the matched vowel ($&) and add a dot after it".

console.log(vowelDots('hello world'))
*/