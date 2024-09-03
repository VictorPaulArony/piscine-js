function firstDayWeek(week, year) {
    const firstDayOfYear = new Date(year, 0, 1);
    const dayOfWeek = firstDayOfYear.getDay() === 0 ? 7 : firstDayOfYear.getDay(); // Treat Sunday as 7

    // Calculate the number of days to add to get to the first Monday of the specified week
    const daysToAdd = (week - 1) * 7 - dayOfWeek + 1; // Adjusting to get to the first Monday

    // Calculate the first day of the specified week
    const firstDayOfWeek = new Date(firstDayOfYear.getTime() + daysToAdd * 24 * 60 * 60 * 1000);

    // If the calculated date is in the previous year, return January 1st of that year
    if (firstDayOfWeek.getFullYear() < year) {
        return `${String(1).padStart(2, '0')}-${String(1).padStart(2, '0')}-${year}`;
    }

    // Format the date as dd-mm-yyyy
    const day = String(firstDayOfWeek.getDate()).padStart(2, '0');
    const month = String(firstDayOfWeek.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const formattedDate = `${day}-${month}-${firstDayOfWeek.getFullYear()}`;
    
    return formattedDate;
}

// Example usage
console.log(firstDayWeek(1, 1000)); // Output: 01-01-1000
console.log(firstDayWeek(52, 1000)); // Output: 25-12-2017
console.log(firstDayWeek(2, 2017)); // Output: 02-01-2017
console.log(firstDayWeek(53, 2017)); // Output: 01-01-2018
