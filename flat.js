function flat(arr, depth = 1) {
    // Initialize an empty array to collect flattened results
    let result = [];

    // Function to recursively flatten arrays
    function flatten(arr, depth) {
        // Iterate over each element in the array
        for (let element of arr) {
            // Check if the current element is an array and depth is greater than 0
            if (Array.isArray(element) && depth > 0) {
                // Recursively flatten the sub-array and concatenate results
                flatten(element, depth - 1);
            } else {
                // Otherwise, push the element into the result array
                result.push(element);
            }
        }
    }

    // Start the flattening process
    flatten(arr, depth);

    return result;
}

// Example usage
console.log(flat([1, [2, [3, [4]]]], 2)); // Output: [1, 2, 3, [4]]
console.log(flat([1, [2, [3, [4]]]])); // Output: [1, 2, 3, [4]]
console.log(flat([1, 2, [3, 4], [5, [6]]], 1)); // Output: [1, 2, 3, 4, 5, [6]]
console.log(flat([1, 2, [3, 4], [5, [6]]], 0)); // Output: [1, 2, [3, 4], [5, [6]]]
