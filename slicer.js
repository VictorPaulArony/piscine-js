// const arr = 'abcdef'

function slice(str, start, end) {
    let res = Array.isArray(str) ? [] : ''

    if (start <0){
        start = Math.max(str.length + start, 0)
    }

    if (end === undefined) {
        end = str.length
    }

    for (let i = start; i < end && i < str.length; i++) {
        if (Array.isArray(str)) {
            res.push(str[i])
        } else {
            res += str[i]
        }
    }

    return res
}

// console.log(slice(arr, -2))
