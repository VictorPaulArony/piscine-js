function isValid(date) {
    // Check if the input is a Date object or a valid timestamp
    return (date instanceof Date && !isNaN(date.getTime())) || 
           (typeof date === 'number' && !isNaN(date) && date >= 0);
}

function toDate(date) {
    // Convert a timestamp to a Date object if it's a number
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
