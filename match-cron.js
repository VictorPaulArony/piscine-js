function matchCron(cronParts, date) {
    // Check each part of the cron expression
    for (let i = 0; i < cronParts.length; i++) {
        if (i === 0) { // Minute
            let min = date.getMinutes();
            if (cronParts[i] !== '*' && min !== parseInt(cronParts[i])) {
                return false;
            }
        } else if (i === 1) { // Hour
            let hour = date.getHours();
            if (cronParts[i] !== '*' && hour !== parseInt(cronParts[i])) {
                return false;
            }
        } else if (i === 2) { // Day of the Month
            let day = date.getDate();
            if (cronParts[i] !== '*' && day !== parseInt(cronParts[i])) {
                return false;
            }
        } else if (i === 3) { // Month
            let month = date.getMonth() + 1; // getMonth() returns 0-11
            if (cronParts[i] !== '*' && month !== parseInt(cronParts[i])) {
                return false;
            }
        } else if (i === 4) { // Day of the Week
            let dayOfWeek = date.getDay() || 7; // getDay() returns 0-6, we want 1-7
            if (cronParts[i] !== '*' && dayOfWeek !== parseInt(cronParts[i])) {
                return false;
            }
        }
    }
    return true;
}

// Example usage:
console.log(matchCron(['*', '3', '*', '*', '1'], new Date('2020-06-01 03:00:00'))); // true
console.log(matchCron(['9', '*', '*', '*', '*'], new Date('2020-05-30 18:09:00'))); // true
console.log(matchCron(['9', '*', '*', '*', '*'], new Date('2020-05-30 19:21:00'))); // false
