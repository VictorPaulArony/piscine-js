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

function reduceKeys(obj, callback, initialValue) {
    let undef = false;
    if (initialValue === undefined) {
        initialValue = "";
        undef = true;
    }
    let res = Object.keys(obj).reduce((acc, curr) => {
        return callback(acc, curr, initialValue);
    }, initialValue);
    if (typeof res !== "number") {
        if (res.slice(0, 2) === ", ") res = res.slice(2);
        if (undef && res[0] === ":") res = res.slice(1);
    }
    return res;
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
// output: carbohydrates, protein, fat
