const is = {}

    is.num = function (value) {
        return typeof value === 'number' 
    }

    is.nan = function (value){
        return  Number.isNaN(value)
    }

    is.str = function (value){
        return  typeof value === 'string'
    }

    is.bool= function (value) {
        return typeof value === 'boolean'
    }
    is.undef= function (value) {
        return typeof value === 'undefined'
    }
    is.def= function (value) {
        return typeof value !== 'undefined'
    }
    is.arr= function (value) {
        return Array.isArray(value)
    }
    is.obj= function (value) {
        return  value !== null && typeof value === 'object'
    }
    is.fun= function (value) {
        return typeof value === 'function'
    }
    is.truthy= function (value) {
        return !!value 
    }
    is.falsy= function (value) {
        return !value 
    }



console.log(is.num(NaN)); // true
console.log(is.nan(NaN)); // true
console.log(is.str("1234"))//true
console.log(is.bool(true)) //true
console.log(is.undef(undefined)) //true
console.log(is.def(null))//true
console.log(is.arr([1,2,3,4])) //true
console.log(is.obj({key: 'value'}))//true
console.log(is.fun(function () { })) //true
console.log(is.truthy(12))//true
console.log(is.falsy(0)) //true

/*
Explanation of Each Function
is.num

    Purpose: Checks if the value is a number.
    Implementation: Uses typeof value === 'number'.

is.nan

    Purpose: Checks if the value is NaN.
    Implementation: Uses Number.isNaN(value).

is.str

    Purpose: Checks if the value is a string.
    Implementation: Uses typeof value === 'string'.

is.bool

    Purpose: Checks if the value is a boolean.
    Implementation: Uses typeof value === 'boolean'.

is.undef

    Purpose: Checks if the value is undefined.
    Implementation: Uses typeof value === 'undefined'.

is.def

    Purpose: Checks if the value is defined (not undefined).
    Implementation: Uses typeof value !== 'undefined'.

is.arr

    Purpose: Checks if the value is an array.
    Implementation: Uses Array.isArray(value).

is.obj

    Purpose: Checks if the value is a simple object or null.
    Implementation: Uses value !== null && typeof value === 'object'.

is.fun

    Purpose: Checks if the value is a function.
    Implementation: Uses typeof value === 'function'.

is.truthy

    Purpose: Checks if the value is truthy.
    Implementation: Uses !!value === true.

is.falsy

    Purpose: Checks if the value is falsy.
    Implementation: Uses !!value === false.

*/
