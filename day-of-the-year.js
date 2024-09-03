function dayOfTheYear(date){
    if (typeof date === 'string'){
        date = new Date(date)
    }
    
    let st = new Date(date.getFullYear(),0,1)

    let diff = date- st

    const count = Math.ceil(diff/(1000*60*60*24) + 1)
    return count
}
// Example usage:
console.log(dayOfTheYear(new Date('1664-08-09'))); // Output: 222
console.log(dayOfTheYear('2024-03-01')); // Output: 61