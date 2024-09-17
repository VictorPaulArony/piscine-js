function tri(str, num){
    let res = ''
   
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= (num -i-1) ; j++) {
            res += ' '
        }

        for (let k = 0; k < i *2 +1 ; k++) {
            res += str
        }
        if (i !== num - 1) {
            res += '\n'
        }
    }

    return res
}
console.log(tri("#", 5))