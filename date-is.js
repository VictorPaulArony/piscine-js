function isValid(date) {
    return date instanceof Date && !isNaN(date.getTime());
}


function isAfter(date1, date2){
    if (date1.getTime() > date2.getTime()){
        return true
    }
    return false
}

function isBefore(date1, date2){
    if (date2.getTime() > date1.getTime()){
        return true 
    }
    return false
}

function isFuture(date){
    if (isValid(date) && date.getTime() > Date.now()){
        return true
    }
    return false
}
function isPast(date){
    if (isValid(date) && date.getTime() < Date.now()){
        return true
    }
    return false
}

