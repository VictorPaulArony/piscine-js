function max(max, min ){
    if (max > min){
        return max
    }else{
        return min
    }
}
function min(max, min){
    if (min < max){
        return min
    }else{
        return max
    }
}

console.log(max(10,20))
console.log(min(10,20))