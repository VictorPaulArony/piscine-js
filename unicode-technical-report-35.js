function format(date, formatStr) {
    const year = date.getFullYear();
    const isBCE = year < 0;
    const yearAbs = Math.abs(year).toString();

    const map = {
        y: yearAbs, // For 'y', just the absolute year as string
        yyyy: (isBCE ? '-' : '') + yearAbs.padStart(4, '0'), // Handle BCE by adding the negative sign back
        M: (date.getMonth() + 1).toString(),
        MM: (date.getMonth() + 1).toString().padStart(2, '0'),
        MMM: date.toLocaleString('default', { month: 'short' }),
        MMMM: date.toLocaleString('default', { month: 'long' }),
        d: date.getDate().toString(),
        dd: date.getDate().toString().padStart(2, '0'),
        H: date.getHours().toString(),
        HH: date.getHours().toString().padStart(2, '0'),
        h: (date.getHours() % 12 || 12).toString(),
        hh: (date.getHours() % 12 || 12).toString().padStart(2, '0'),
        m: date.getMinutes().toString(),
        mm: date.getMinutes().toString().padStart(2, '0'),
        s: date.getSeconds().toString(),
        ss: date.getSeconds().toString().padStart(2, '0'),
        E: date.toLocaleString('default', { weekday: 'short' }),
        EEEE: date.toLocaleString('default', { weekday: 'long' }),
        a: date.getHours() < 12 ? 'AM' : 'PM',
    };

    return formatStr.replace(/y{1,4}|M{1,4}|d{1,2}|E{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|a/g, match => map[match]);
}

// Example usage:
// const d = new Date('7 January 1985, 03:08:19');
// console.log(format(d, 'HH(mm)ss [dd] <MMM>')); // -> '03(08)19 [07] <Jan>'
 /*
 Explanation:
Mapping Date Components:

The map object contains functions that return the formatted string for each date component based on the format string passed to the format function.
Handling Different Formats:

Each key in the map corresponds to a specific format option (e.g., yyyy for the full year, MMM for the abbreviated month name).
The functions use methods like getFullYear(), getMonth(), getDate(), getHours(), etc., to get the respective parts of the date.
Some formats require additional formatting, such as zero-padding (padStart) for two-digit values.
Replacing Format Tokens:

The replace function with a regular expression (/\byyyy|y|...|a\b/g) searches the format string for these tokens and replaces them with the corresponding date component.
Example Output:
Given the date 7 January 1985, 03:08:19, the format string 'HH(mm)ss [dd] <MMM>' will be formatted as '03(08)19 [07] <Jan>'.

HH -> 03 (24-hour format, zero-padded)
mm -> 08 (minutes, zero-padded)
ss -> 19 (seconds, zero-padded)
dd -> 07 (day of the month, zero-padded)
MMM -> Jan (abbreviated month name)
 */