function isFriday(date) {
    return date.getDay() === 5;
}

function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
}

function isLeapYear(date) {
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function isLastDayOfMonth(date) {
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    return nextDay.getMonth() !== date.getMonth();
}

// const date = new Date('2014-02-28');
// console.log(isFriday(date));
// console.log(isWeekend(date));
// console.log(isLeapYear(date));
// console.log(isLastDayOfMonth(date));
