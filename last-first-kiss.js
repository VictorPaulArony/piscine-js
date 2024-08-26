
const arr = "123456"
function first(arr){
    return arr[0]
}

function last(arr){
    return arr[arr.length-1]
}

function kiss(arr){
    return [last(arr), first(arr)]
}

console.log(first(arr))
console.log(last(arr))
console.log(kiss(arr))