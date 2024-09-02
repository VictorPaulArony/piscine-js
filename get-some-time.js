function firstDayWeek(week, year) {
    const firstDayOfYear = new Date(year, 0, 1);
    const dayOfWeek = firstDayOfYear.getDay() === 0 ? 7 : firstDayOfYear.getDay(); // Treat Sunday as 7
    const daysToAdd = (week - 1) * 7 - dayOfWeek + 1;
    const firstDayOfWeek = new Date(firstDayOfYear.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
    return `${String(firstDayOfWeek.getDate()).padStart(2, '0')}-${String(firstDayOfWeek.getMonth() + 1).padStart(2, '0')}-${firstDayOfWeek.getFullYear()}`;
}

const tests = [
    ({ eq }) => eq(firstDayWeek(1, '1000'), '01-01-1000'),
    ({ eq }) => eq(firstDayWeek(52, '1000'), '22-12-1000'),
    ({ eq }) => eq(firstDayWeek(2, '0001'), '08-01-0001'),
    ({ eq }) => eq(firstDayWeek(43, '1983'), '17-10-1983'),
    ({ eq }) => eq(firstDayWeek(23, '0091'), '04-06-0091'),
    ({ eq }) => eq(firstDayWeek(2, '2017'), '02-01-2017')
];
