const escapeStr = "\`, \\, \/, \" and \'."
const arr = [4,'2']
const obj = {str:"string", num: 123, bool:"boolean", undef:"undefined"}
const nested = {
    arr: [4,"undefined", '2'],
    obj: { str:"string", num:123, bool:"boolean" }
}

Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)