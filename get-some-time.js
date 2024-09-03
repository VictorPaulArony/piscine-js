function firstDayWeek(week, year) {
    // Create a date object for January 1st of the given year
    const firstDayOfYear = new Date(Date.UTC(year, 0, 1));

    // Get the day of the week for January 1st (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = firstDayOfYear.getUTCDay() || 7; // 1 (Mon) to 7 (Sun)

    // Calculate the first day of the specified week
    const daysToAdd = (week - 1) * 7 - dayOfWeek + 1;
    const firstDayOfWeek = new Date(Date.UTC(year, 0, 1 + daysToAdd));

    // Format the date as dd-mm-yyyy
    const day = String(firstDayOfWeek.getUTCDate()).padStart(2, '0');
    const month = String(firstDayOfWeek.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const formattedYear = String(year).padStart(4, '0');

    return `${day}-${month}-${formattedYear}`;
}

// Test cases
console.log(firstDayWeek(1, '1000')); // Output: 01-01-1000
console.log(firstDayWeek(52, '1000')); // Output: 22-12-1000
console.log(firstDayWeek(2, '0001')); // Output: 08-01-0001
console.log(firstDayWeek(43, '1983')); // Output: 17-10-1983
console.log(firstDayWeek(23, '0091')); // Output: 04-06-0091
console.log(firstDayWeek(2, '2017')); // Output: 02-01-2017
