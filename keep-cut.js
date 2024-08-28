//  const str = 'abc'
function cutFirst(str){
    let res = ''
    for (let i = 2; i < str.length;i++){
         res += str[i]
    }
    return res
}

function cutLast(str){
    let res = ''
    for (let i = 0; i < str.length-2; i++){
        res += str[i]
    }
    return res
}

function cutFirstLast(str){
    let res = ''
    for (let i = 2; i < str.length-2; i++){
        res += str[i]
    }
    return res
}

function keepFirst(str){
    let res = ''
    for (let i = 0;i< 2 && i < str.length; i++){
        res += str[i]
    }
    return res
}

function keepLast(str){
    let res = ''
    res = str.slice(-2)
    return res
}
 function keepFirstLast(str){
    let res1 = ''
    let res2 = ''

    if (str.length <= 4){
        return str
    }

   res1 = str.slice(0,2)

   res2 = str.slice(-2)
    return res1.concat('', res2)

 }



// console.log(cutFirst(str))
// console.log(cutLast(str))
// console.log(cutFirstLast(str))
// console.log(keepFirst(str))
 //console.log(keepLast(str))
// console.log(keepFirstLast(str))