function dayOfTheYear(date) {
    let days = 1;
    while (!isFirstofFirst(date)) {
        date.setDate(date.getDate() - 1);
        days++;
    }
    return days;
}

function isFirstofFirst(date) {
    return date.getDate() === 1 && date.getMonth() === 0;
}
// Example usage:
console.log(dayOfTheYear(new Date('0001-01-01'))); // Output: 222
console.log(dayOfTheYear('2024-03-01')); // Output: 61