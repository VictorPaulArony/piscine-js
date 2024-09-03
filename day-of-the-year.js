function dayOfTheYear(date) {
    // Convert the string to a Date object if it's not already
    if (typeof date === 'string') {
        date = new Date(date);
    }

    let days = 0;
    while (!isFirstofFirst(date)) {
        date.setDate(date.getDate() - 1);
        days++;
    }
    return days + 1; // Adding 1 to count the starting day
}

function isFirstofFirst(date) {
    return date.getDate() === 1 && date.getMonth() === 0;
}

// Example usage:
console.log(dayOfTheYear(new Date('0001-01-01'))); // Expected Output: 1
console.log(dayOfTheYear('2024-03-01')); // Expected Output: 61
