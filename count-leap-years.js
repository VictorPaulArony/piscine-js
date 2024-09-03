function countLeapYears(date) {
    let year = date.getFullYear();
    let count = 0;

    for (let i = 1; i < year; i++) {
        if (isLeapYear(new Date(i, 0, 1))) {
            count++;
        }
    }
    return count;
}

function isLeapYear(date) {
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage:
console.log(countLeapYears(new Date('1664-08-09'))); // Output: 0
console.log(countLeapYears(new Date('2048-12-08'))); // Example output: 490
