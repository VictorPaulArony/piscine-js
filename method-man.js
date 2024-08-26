
function words(str){
    return str.split(' ')
}
function sentence(arr){
    return arr.join(' ')
}

function yell(str){
    return str.toUpperCase()
}

function whisper(str){
    return `*${str.toLowerCase()}*`;
}
function capitalize(str){
    const s = str.split(" ")
    for (let i= 0; i< s.length;i++){
        s[i] = s[i][0].toUpperCase() + s[i].substr(1)
    }
   return s.join(" ")
   
}

console.log(words("The quick brown fox jumped over the lazy dog"))
console.log(sentence(["the", "quick", "brown", "fox", "jumped"]))
console.log(yell("The quick brown fox jumped over the lazy dog"))
console.log(whisper("The quick brown fox jumped over the lazy dog"))
console.log(capitalize("The quick brown fox jumped over the lazy dog"))