function filterValues(obj, call ){
    const res = {}
    for(let [key, value] of Object.entries(obj)){
        if (call(value)){
            res[key] = value
        }
    }
    return res
}



function mapValues(obj, call){
    const res = {}
    for (let [key, value] of Object.entries(obj)){
        res[key] = call(value)
    }
    return res
}



function reduceValues(obj, call, initial){
    // let res = initial
    // for (let key in obj){
    //     if (obj.hasOwnProperty(key)){
    //         res += obj[key]
    //     }
    // }
    // for(let [key, value] of Object.entries(obj)){
    //     res = call(res, value)
    // }
    // return res
    if (initial === undefined) {
        initial = 0;
    }
    for (let key in obj) {
        initial= call(initial, obj[key]);
    }
    return initial

}
function main(obj, call){
    let res = {}
    for(let [key, nested] of Object.entries(obj)){
        if (typeof nested === 'object' && nested !== null){
            let filtered = filterValues(obj, call)
            let map = mapValues(obj, call)
            let reduced = reduceValues(obj, call)
            res[key] = {filtered, map, reduced }
        }
    }
    return res
}


// const nutrients = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//   }

//   console.log(filterValues(nutrients, (nutrient) => nutrient.calories <= 50));
//   // Expected output: { tomato: { ... }, vinegar: { ... }, onion: { ... }, orange: { ... } }
  
//   console.log(mapValues(nutrients, (v) => ({ ...v, calories: v.calories + 1 })));
//   // Expected output: { tomato: { calories: 19, ... }, vinegar: { calories: 21, ... }, ... }
  
//   console.log(reduceValues(nutrients, (acc, cr) => initial+ cr.calories, 0));
//   // Expected output: 953

// console.log(reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => initial + cr, 3));