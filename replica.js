// Function to check if an item is an object
function isObject(item) {
    // Returns true if item is an object, not an array, and not a RegExp instance
    return (item && typeof item === 'object' && !Array.isArray(item) && !(item instanceof RegExp));
}

// Function to deeply merge properties of source objects into the target object
function replica(target, ...sources) {
    // Iterate over each source object
    for (const source of sources) {
        // Get all keys of the current source object
        const keys = Object.keys(source);
        // Iterate over each key in the source object
        for (const key of keys) {
            const sourceValue = source[key]; // Get the value associated with the key in the source object
            // If the value is an object, perform a deep merge
            if (isObject(sourceValue)) {
                // If the target does not have the key or the value is not an object, initialize it as an empty object
                if (!target.hasOwnProperty(key) || !isObject(target[key])) {
                    target[key] = {};
                }
                // Recursively merge the object
                replica(target[key], sourceValue);
            } else {
                // If the value is not an object, directly assign it to the target
                target[key] = sourceValue;
            }
        }
    }
    // Return the modified target object
    return target;
}
