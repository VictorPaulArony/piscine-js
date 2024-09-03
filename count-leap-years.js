function countLeapYear(date){
    let count = 0
    for (let i = 0 ; i < date.length; i++){
        if (isLeapYear(new Date(date[i], 0, 1))){
            count++
        }
    }
    return count
}
function isLeapYear(date) {
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// console.log(countLeapYear([2016, 1997, 2020, 2021, 2048]))