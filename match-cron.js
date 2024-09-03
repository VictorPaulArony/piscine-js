function matchCron(str, date) {
    for (let i = 0; i < str.length; i++) {
        if (i === 0 && (str[i] === '*' || parseInt(str[i]) <= 59)) {
            let min = date.getMinutes();
            if (str[i] !== '*' && min !== parseInt(str[i])) {
                return false;
            }
        } else if (i === 1 && (str[i] === '*' || parseInt(str[i]) <= 23)) {
            let hour = date.getHours();
            if (str[i] !== '*' && hour !== parseInt(str[i])) {
                return false;
            }
        } else if (i === 2 && (str[i] === '*' || parseInt(str[i]) <= 31)) {
            let day = date.getDate();
            if (str[i] !== '*' && day !== parseInt(str[i])) {
                return false;
            }
        } else if (i === 3 && (str[i] === '*' || parseInt(str[i]) <= 12)) {
            let month = date.getMonth() + 1; // getMonth() returns 0-11
            if (str[i] !== '*' && month !== parseInt(str[i])) {
                return false;
            }
        } else if (i === 4 && (str[i] === '*' || parseInt(str[i]) <= 7)) {
            let dayOfWeek = date.getDay() || 7; // getDay() returns 0-6, we want 1-7
            if (str[i] !== '*' && dayOfWeek !== parseInt(str[i])) {
                return false;
            }
        }
    }
    return true;
}

// Example usage:
console.log(matchCron(['*', '*', '*', '*', '1'], new Date('2020-06-01 00:00:00'))); // true
console.log(matchCron(['9', '*', '*', '*', '*'], new Date('2020-05-30 18:09:00'))); // true
console
