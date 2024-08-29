function split(str){
    let res = []
    let word = ''
    for (let i = 0; i < str.length; i++){
        if (str[i] !== ' '){
            word += str[i]
        }else if (word !== ''){
            res.push(word)
            word = ''
        }
    }
    if (word !== ''){
        res.push(word)
    }
    return res
}
function join(arr){
    let res = ""
    for (let i = 0; i < arr.length; i++){
    if(i > 0){
        res += ' '
    }
        res += arr[i]
    }
    return res
}



// console.log(split('hello world'))
// console.log(join(['hello', 'world']))