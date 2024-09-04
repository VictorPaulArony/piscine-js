function sunnySunday(date){
    let day = Math.floor((date - new Date('0001-01-01')) / (1000 * 60 * 60 * 24))
    let adjustDay = day % 6
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[adjustDay]
}
console.log(sunnySunday(new Date('2048-12-08')));
/*
date - new Date('0001-01-01'): This subtracts the date 0001-01-01 from the input date. This gives the difference in milliseconds between the two dates.
1000 * 60 * 60 * 24: This is the number of milliseconds in one day.
Dividing the difference in milliseconds by the number of milliseconds in a day gives the total number of days that have passed since 0001-01-01.
Math.floor(...) is used to round down the number to the nearest whole number.
The day % 6 operation calculates the remainder when the total number of days (day) is divided by 6. This operation effectively wraps the days 
around every 6 days, simulating a week without Sundays.
The days array is used to map the day number to the corresponding day of the week.
*/