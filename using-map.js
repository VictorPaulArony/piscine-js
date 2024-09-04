
// const arr = ([
//     {
//       city: 'Los Angeles',
//       temperature: '  68 °F   ',
//     },
//     {
//       city: 'san francisco',
//       temperature: ' 59 ° F   ',
//     },
//     {
//         city: 'Pasadena',
//         temperature: ' 101 °F',
//         state: 'california',
//         region: 'West',
//       },
// ])

function citiesOnly(arr){
    return arr.map(item => item.city)
}

function upperCasingStates(arr){
    return  arr.map(item => {
        return  item.city 
            .split(' ')
            .map(city => city.charAt(0).toUpperCase() + city.slice(1).toLowerCase())
            .join(" ")
    })

}

function fahrenheitToCelsius(arr){
    return arr.map(item => {
            let temp = parseFloat(item.temperature)
            let cel = Math.floor((temp - 32) *5/9)
            return cel.toString() + '°C'
    })
}

function trimTemp(arr){
    return arr.map(item =>{
        let trimed = item.temperature.replace(/\s+/g, '')
        return {
            city: item.city,
            temperature: trimed
        }
    })
}

function tempForecasts(arr){
    return arr.map(item =>{
        let tem = parseFloat(item.temperature)
        let cel = Math.floor((tem-32) *5/9)
        // let upper = item.state.charAt(0).toUpperCase() + item.state.slice(1).toLowerCase()
        let upper = item.state.charAt(0).toUpperCase() + item.state.slice(1).toLowerCase();

        return `${cel}°Celsius in  ${item.city}, ${upper}`
    })
}




// console.log(citiesOnly(arr))
// console.log(upperCasingStates(arr))
// console.log(fahrenheitToCelsius(arr))
// console.log(trimTemp(arr))
// console.log(tempForecasts(arr))