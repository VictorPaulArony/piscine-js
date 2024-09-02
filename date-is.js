function isValid(date) {
    // Check if the input is a Date object or a valid timestamp
    return (date instanceof Date && !isNaN(date.getTime())) || 
           (typeof date === 'number' && !isNaN(date) && date >= 0) ||
           (typeof date === 'string' && !isNaN(Date.parse(date)));
}

function toDate(date) {
    // Convert a timestamp or date string to a Date object
    return (date instanceof Date) ? date : new Date(date);
}

function isAfter(date1, date2) {
    const d1 = toDate(date1);
    const d2 = toDate(date2);
    return isValid(d1) && isValid(d2) && d1.getTime() > d2.getTime();
}

function isBefore(date1, date2) {
    const d1 = toDate(date1);
    const d2 = toDate(date2);
    return isValid(d1) && isValid(d2) && d2.getTime() > d1.getTime();
}

function isFuture(date) {
    const d = toDate(date);
    return isValid(d) && d.getTime() > Date.now();
}

function isPast(date) {
    const d = toDate(date);
    return isValid(d) && d.getTime() < Date.now();
}

// console.log(isValid(new Date())); // true
// console.log(isValid(new Date('invalid date'))); // false
// console.log(isValid(Date.now())); // true (now is a valid timestamp)
// console.log(isValid(new Date(Date.now()))); // true (valid Date object)
// console.log(isValid('2013-01-01')); // true (valid date string)

// console.log(isPast('2013-01-01')); // false (2013-01-01 is not in the past)
// console.log(isPast(new Date(Date.now() - 10000))); // true (10 seconds in the past)

// const futureDate = new Date(Date.now() + 10000); // 10 seconds in the future
// const pastDate = new Date(Date.now() - 10000); // 10 seconds in the past

// console.log(isAfter(futureDate, pastDate)); // true
// console.log(isBefore(pastDate, futureDate)); // true
// console.log(isFuture(futureDate)); // true
// console.log(isPast(pastDate)); // true
