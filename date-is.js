function isValid(date) {
    // Check if the input is a Date object or a valid timestamp
    return (date instanceof Date && !isNaN(date.getTime())) || 
           (typeof date === 'number' && !isNaN(date) && date >= 0);
}

function isAfter(date1, date2) {
    return isValid(date1) && isValid(date2) && date1.getTime() > date2.getTime();
}

function isBefore(date1, date2) {
    return isValid(date1) && isValid(date2) && date2.getTime() > date1.getTime();
}

function isFuture(date) {
    return isValid(date) && date.getTime() > Date.now();
}

function isPast(date) {
    return isValid(date) && date.getTime() < Date.now();
}
