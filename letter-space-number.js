function letterSpaceNumber(str){
    const regex = /\w\s\d(?!\w)/g
    
    let matches = str.match(regex)

    return matches ? matches : []
}
/*
function letterSpaceNumber(str) {
    // Regular expression to match a letter followed by a space and a single digit number, not followed by another letter
    const regex = /[a-zA-Z] \d(?![a-zA-Z])/g;
    
    // Use match to find all occurrences that match the regex
    const matches = str.match(regex);
    
    // If no matches are found, return an empty array
    return matches ? matches : [];
}

/[a-zA-Z] \d(?![a-zA-Z])/g:
[a-zA-Z] matches any letter (uppercase or lowercase).
matches a space.
\d matches any digit (0-9).
(?![a-zA-Z]) is a negative lookahead that ensures the digit is not followed by another letter.
The g flag is used to match all occurrences in the string.
*/

console.log(letterSpaceNumber('I like 7up.'))