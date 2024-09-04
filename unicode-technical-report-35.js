function format(date, formatStr) {
    const map = {
        'y': () => date.getFullYear().toString().slice(-2),
        'yyyy': () => date.getFullYear(),
        'G': () => date.getFullYear() > 0 ? 'AD' : 'BC',
        'GGGG': () => date.getFullYear() > 0 ? 'Anno Domini' : 'Before Christ',
        'M': () => date.getMonth() + 1,
        'MM': () => String(date.getMonth() + 1).padStart(2, '0'),
        'MMM': () => date.toLocaleString('default', { month: 'short' }),
        'MMMM': () => date.toLocaleString('default', { month: 'long' }),
        'd': () => date.getDate(),
        'dd': () => String(date.getDate()).padStart(2, '0'),
        'E': () => date.toLocaleString('default', { weekday: 'short' }),
        'EEEE': () => date.toLocaleString('default', { weekday: 'long' }),
        'h': () => date.getHours() % 12 || 12,
        'hh': () => String(date.getHours() % 12 || 12).padStart(2, '0'),
        'H': () => date.getHours(),
        'HH': () => String(date.getHours()).padStart(2, '0'),
        'm': () => date.getMinutes(),
        'mm': () => String(date.getMinutes()).padStart(2, '0'),
        's': () => date.getSeconds(),
        'ss': () => String(date.getSeconds()).padStart(2, '0'),
        'a': () => date.getHours() < 12 ? 'AM' : 'PM'
    };

    return formatStr.replace(/\byyyy|y|GGGG|G|MMMM|MMM|MM|M|dd|d|EEEE|E|hh|h|HH|H|mm|m|ss|s|a\b/g, (match) => map[match]());
}

// Example usage:
const d = new Date('7 January 1985, 03:08:19');
console.log(format(d, 'HH(mm)ss [dd] <MMM>')); // -> '03(08)19 [07] <Jan>'
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