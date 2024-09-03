function firstDayWeek(week, year) {
    const firstDayOfYear = new Date(year, 0, 1);
    const dayOfWeek = firstDayOfYear.getDay() === 0 ? 7 : firstDayOfYear.getDay(); // Treat Sunday as 7
    const daysToAdd = (week - 1) * 7 - dayOfWeek + 1;
    const firstDayOfWeek = new Date(firstDayOfYear.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
    return `${String(firstDayOfWeek.getDate()).padStart(2, '0')}-${String(firstDayOfWeek.getMonth() + 1).padStart(2, '0')}-${firstDayOfWeek.getFullYear()}`;
}
console.log(firstDayWeek(1, '1000')); // Output: 01-01-2017