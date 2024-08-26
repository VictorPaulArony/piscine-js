const escapeStr = "\`, \\, \/, \" and \'."
const arr = [4,'2']
const obj = {str:"string", num:"number", bool:"boolean", undef:"undefined"}
const nested = {
    arr: [4,"undefined", '2'],
    obj: { str:"string", num:"number", bool:"boolean" }
}

Object.freeze(escapeStr)
Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested.arr)
Object.freeze(nested.obj)