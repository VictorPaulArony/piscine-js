function fusion(arr1, arr2) {
    let res = {};

    // Get a unique list of all keys in arr1 and arr2
    const allKeys = new Set([...Object.keys(arr1), ...Object.keys(arr2)]);

    for (const key of allKeys) {
        if (arr1.hasOwnProperty(key) && arr2.hasOwnProperty(key)) {

            if (Array.isArray(arr1[key]) && Array.isArray(arr2[key])) {
                res[key] = arr1[key].concat(arr2[key]);
            } else if (typeof arr1[key] === 'string' && typeof arr2[key] === 'string') {
                res[key] = arr1[key] + " " + arr2[key];
            } else if (typeof arr1[key] === 'number' && typeof arr2[key] === 'number') {
                res[key] = arr1[key] + arr2[key];
            } else if (typeof arr1[key] === 'object' && typeof arr2[key] === 'object' 
                       && arr1[key] !== null && arr2[key] !== null 
                       && !Array.isArray(arr1[key]) && !Array.isArray(arr2[key])) {
                res[key] = fusion(arr1[key], arr2[key]);
            } else {
                res[key] = arr2[key] !== undefined ? arr2[key] : arr1[key];
            }
        } else {
            res[key] = arr1[key] !== undefined ? arr1[key] : arr2[key];
        }
    }

    return res;
}

// Example usages:
console.log(fusion({ arr: [1, "2"] }, { arr: [2] })); // -> { arr: [ 1, '2', 2 ] }
console.log(fusion({ arr: [], arr1: [5] }, { arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] })); // -> { arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }
console.log(fusion({ str: "salem" }, { str: "alem" })); // -> { str: 'salem alem' }
console.log(fusion({ str: "salem" }, { str: "" })); // -> { str: 'salem ' }
console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 })); // -> { a: 20, b: 10, c: 1 }
console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } })); // -> { a: 11, x: [], b: { c: 'Salem alem' } }
console.log(fusion({ a: { b: [3, 2], c: { d: 8 } } }, { a: { b: [0, 3, 1], c: { d: 3 } } })); // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }
console.log(fusion({ a: "hello", b: [] }, { a: 4 })); // -> { a: 4, b: [] }
