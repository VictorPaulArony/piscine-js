// const arr = 'abcdef'
function slice(str, start, end){
    const res = []
    if (end === undefined){
        end = str.length
    }
    for(let i = start; i < end && i < str.length; i++){
        res.push(str[i])
    }


    return res
}
// console.log(slice(arr,2))