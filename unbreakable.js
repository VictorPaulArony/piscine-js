function split(str, sep){
    let res = []
    let word = ''
    for (let i = 0; i < str.length; i++){
        if (str[i] !== sep){
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
function join(arr , sep){
    let res = ""
    for (let i = 0; i < arr.length; i++){
    if(i > 0){
        res += sep
    }
        res += arr[i]
    }
    return res
}



// console.log(split('hello world'))
// console.log(join(['hello', 'world']))

// console.log(split('hello,world,this,is,a,test', ',')); // ['hello', 'world', 'this', 'is', 'a', 'test']
// console.log(join(['hello', 'world', 'this', 'is', 'a', 'test'], '-')); // 'hello-world-this-is-a-test'
// console.log(split('one-two-three', '-')); // ['one', 'two', 'three']
// console.log(join(['one', 'two', 'three'], '+')); // 'one+two+three'