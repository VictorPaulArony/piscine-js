function firstDayWeek(week, year) {
    year = parseInt(year);
    if (week === 1) {
        return `01-01-${year.toString().padStart(4, '0')}`;
    }

    const firstJan = new Date(year, 0, 1);
    const dayOffset = firstJan.getDay();
    const firstMonday = new Date(year, 0, 1 + (dayOffset <= 1 ? 1 - dayOffset : 8 - dayOffset));
    const targetDate = new Date(firstMonday.getTime() + (week - 2) * 7 * 24 * 60 * 60 * 1000);

    const day = targetDate.getDate().toString().padStart(2, '0');
    const month = (targetDate.getMonth() + 1).toString().padStart(2, '0');
    const formattedYear = year.toString().padStart(4, '0');

    return `${day}-${month}-${formattedYear}`;
}
// Test cases
console.log(firstDayWeek(1, '1000')); // Output: 01-01-1000
console.log(firstDayWeek(52, '1000')); // Output: 22-12-1000
console.log(firstDayWeek(2, '0001')); // Output: 08-01-0001
console.log(firstDayWeek(43, '1983')); // Output: 17-10-1983
console.log(firstDayWeek(23, '0091')); // Output: 04-06-0091
console.log(firstDayWeek(2, '2017')); // Output: 02-01-2017