let arg = process.argv[2]
let arr = arg.split(' ')
let arr1 = []

for (let i =0; i <= arr.length-1; i++) {
    let l = Math.round(arr[i].length/2)
    arr1.push( arr[i].slice(l) + arr[i].slice(0,l))
}


console.log(arr1.join(' '))