function forEach(arr, func){
    for (let i = 0; i < arr.length; i++){
        func(arr[i],i, arr)
    }
}
// console.log(forEach([1,2,3,4,5], (el) => console.log(el)))
// Example usage
// const numbers = [1, 2, 3, 4, 5];

// forEach(numbers, (num, index) => {
//     console.log(`Element at index ${index} is ${num}`);
// });