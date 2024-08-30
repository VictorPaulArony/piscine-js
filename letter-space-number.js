function letterSpaceNumber(str){
    const regex = /\w\s\d(?!\d)/g
    
    let matches = str.match(regex)

    return matches ? matches : []
}

// console.log(letterSpaceNumber('example 1, example 2'))