const arr = ["0", "1", "2", "3", "4", "5"]
function slice(str, start, end){
    const res = []
    for(let i = start; i < end && i < str.length; i++){
        res.push(str[i])
    }


    return res
}
console.log(slice(arr,2,6))