function vowelDots(str){
    var regex = /[aeiou]/g
    var res = str.replace(regex, '$&.')
    return res 
}

console.log(vowelDots('hello world'))