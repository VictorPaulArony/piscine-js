//const str = 'abcdef'
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
    for (let i = str.length-2; i < str.length; i++){
        res += str[i]
    }
    return res
}
 function keepFirstLast(str){
    let res1 = ''
    let res2 = ''

    for (let i = 0;i< 2 && i < str.length; i++){
        res1 += str[i]
    }

    for (let i = str.length-2; i < str.length; i++){
        res2 += str[i]
    }
    return res1.concat('', res2)

 }



// console.log(cutFirst(str))
// console.log(cutLast(str))
// console.log(cutFirstLast(str))
// console.log(keepFirst(str))
 //console.log(keepLast(str))
// console.log(keepFirstLast(str))