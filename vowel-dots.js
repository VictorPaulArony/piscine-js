
function vowelDots(str) {
    const vowels = /[aeiou]/i;
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (vowels.test(str[i])) {
            res += '.';
        } else {
            res += str[i];
        }
    }
}


