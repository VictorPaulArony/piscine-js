function addWeek (date){
    const epoch = new Date(1, 0, 1);
    const diffinTime = date - epoch
    const diffinDays = Math.floor(diffinTime / (1000 * 360 * 24))

    const daysInNewWeek = 14
    const dayofNewWeek = diffinDays % daysInNewWeek
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday',
     'secondSaturday', 'secondSunday']
    
    return days[dayofNewWeek]
}

const date = new Date('2024-09-02T12:00:00')
console.log(addWeek(date))


function timeTravel({date, hour = 0, minute = 0 , second = 0}) {
    const newDate = new Date(date)
    newDate.setHours(hour, minute, second)
    return newDate
}

const currentDate = new Date('2024-09-02T12:00:00')
const modifiedDate = timeTravel({date: currentDate,hour: 15, minute: 30, second: 0})
console.log(modifiedDate)