function chunk(arr, int){
    let res = []
    let temp = []
    for (let i = 0; i < arr.length; i++){
        temp.push(arr[i])
        if (temp.length === int){
            res.push(temp)
            temp = []
        }
    }
    if (temp.length > 0){
        res.push(temp)
    }
    return res
}





// console.log(chunk([1,2,3,4,5,6,7,8,9,10], 3))