function firstDayWeek(week, year) {
    year = parseInt(year);
    const firstJan = new Date(year, 0, 1);
    const dayOffset = firstJan.getDay() - 1;
    const firstMonday = new Date(year, 0, 1 + (dayOffset <= 0 ? -dayOffset + 1 : 7 - dayOffset));
    const targetDate = new Date(firstMonday.getTime() + (week - 1) * 7 * 24 * 60 * 60 * 1000);

    if (targetDate.getFullYear() < year) {
        return `01-01-${year.toString().padStart(4, '0')}`;
    }

    const day = targetDate.getDate().toString().padStart(2, '0');
    const month = (targetDate.getMonth() + 1).toString().padStart(2, '0');
    const formattedYear = year.toString().padStart(4, '0');

    return `${day}-${month}-${formattedYear}`;
}
