function isValid(date) {
    return date instanceof Date && !isNaN(date.getTime());
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
