function addWeek (date){
    const epoch = new Date('0001-01-01T00:00:00Z');
    const diffinTime = date - epoch
    const diffinDays = Math.floor(diffinTime / (1000 * 360 * 24))

    const daysInNewWeek = 14
    const dayofNewWeek = diffinDays % daysInNewWeek
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday',
     'secondSaturday', 'secondSunday']
    
    return days[dayofNewWeek]
}

const date = new Date('0001-01-02')
console.log(addWeek(date))


function timeTravel({date, hour = 0, minute = 0 , second = 0}) {
    const newDate = new Date(date)
    newDate.setHours(hour, minute, second)
    return newDate
}

const currentDate = new Date('2020-05-29 23:25:22')
const modifiedDate = timeTravel({date: currentDate,hour: 21, minute: 22, second: 22}).toString()
console.log(modifiedDate)