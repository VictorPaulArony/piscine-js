function filterKeys(obj, call) {
    let res = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && call(key)) {
            res[key] = obj[key]
        }
    }
    return res;
}

function mapKeys(obj, call) {
    let res = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let newkey = call(key)
            res[newkey] = obj[key]
        }
    }
    return res;
}

function reduceKeys(obj, call, initial) {
    for (let key of Object.keys(obj)) {
        initial = call(initial, key);
    }
    return initial;
}

function concat(n, m) {
    return n + m
}

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };

// console.log(filterKeys(nutrients, (key) => /protein/.test(key)));
// // output: { protein: 20 }

// console.log(mapKeys(nutrients, (k) => `-${k}`));
// // output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

// console.log(reduceKeys(nutrients, (acc, cr) => acc ? acc.concat(', ', cr) : cr, ''));
// // output: carbohydrates, protein, fat
