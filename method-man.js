const str = "The quick brown fox jumped over the lazy dog"
const arr = ["the", "quick", "brown", "fox", "jumped"]
const str1 = "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"

function words(){
    return str.split(' ')
}
function sentence(){
    return arr.join(' ')
}

function yell(){
    return str.toUpperCase()
}

function whisper(){
    return str1.toLowerCase()
}
function capitalize(str2){
    return str2.charAt(0).toUpperCase() + str2.slice(1)
}

console.log(words())
console.log(sentence())
console.log(yell())
console.log(whisper())
console.log(capitalize('the quick brown fox jumped over the lazy dog'))