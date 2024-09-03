function firstDayWeek(week, year) {
    year = year.padStart(4, '0');
    const date = new Date(Date.UTC(+year, 0, 1));
    const dayOfWeek = date.getUTCDay() || 7;
    const daysToAdd = (week - 1) * 7 - dayOfWeek + 1;
    const targetDate = new Date(Date.UTC(+year, 0, 1 + daysToAdd));

    const day = targetDate.getUTCDate().toString().padStart(2, '0');
    const month = (targetDate.getUTCMonth() + 1).toString().padStart(2, '0');
    const formattedYear = year;

    return `${day}-${month}-${formattedYear}`;
}

// export const tests = []

// const t = (f) => tests.push(f)

// t(({ eq }) => eq(firstDayWeek(1, '1000'), '01-01-1000'))
// t(({ eq }) => eq(firstDayWeek(52, '1000'), '22-12-1000'))
// t(({ eq }) => eq(firstDayWeek(2, '0001'), '08-01-0001'))
// t(({ eq }) => eq(firstDayWeek(43, '1983'), '17-10-1983'))
// t(({ eq }) => eq(firstDayWeek(23, '0091'), '04-06-0091'))
// t(({ eq }) => eq(firstDayWeek(2, '2017'), '02-01-2017'))

Object.freeze(tests)
