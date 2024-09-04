function flow(func){
    return function(num){
        return func.reduce((acc, curr) => curr(acc), num)
    }
}