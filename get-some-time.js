function firstDayWeek(week, year) {
    const firstDayOfYear = new Date(year, 0, 1);
    const dayOfWeek = firstDayOfYear.getDay() || 7; // Treat Sunday as 7
    const daysToAdd = (week - 1) * 7 - dayOfWeek + 1;
    const firstDayOfWeek = new Date(Date.UTC(Number(year), 0, 1 + daysToAdd));
    return firstDayOfWeek.toISOString().slice(0, 10).split('-').reverse().join('-');
}

// export const tests = []

// const t = (f) => tests.push(f)

// t(({ eq }) => eq(firstDayWeek(1, '1000'), '01-01-1000'))
// t(({ eq }) => eq(firstDayWeek(52, '1000'), '22-12-1000'))
// t(({ eq }) => eq(firstDayWeek(2, '0001'), '08-01-0001'))
// t(({ eq }) => eq(firstDayWeek(43, '1983'), '17-10-1983'))
// t(({ eq }) => eq(firstDayWeek(23, '0091'), '04-06-0091'))
// t(({ eq }) => eq(firstDayWeek(2, '2017'), '02-01-2017'))
