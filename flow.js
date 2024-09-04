function flow(func){
    return function(...num){
        if (num.length > 1){
            num = [func[0](...num)]
        }
        return func.reduce((acc, curr) => curr(acc), num)
    }
}