
const arr = ([
    // {
    //   city: 'Los Angeles',
    //   temperature: '  68 °F   ',
    // },
    // {
    //   city: 'san francisco',
    //   temperature: ' 59 ° F   ',
    // },
    {
        city: 'Pasadena',
        temperature: ' 101 °F',
        state: 'california',
        region: 'West',
      },
])

function citiesOnly(arr){
    return arr.map(item => item.city)
}

function upperCasingStates(arr){
    return arr.map((item) =>
    item
        .split(" ")
        .map((word) => {
            return word[0].toUpperCase() + word.slice(1);
        })
        .join(" ")
);

}

function fahrenheitToCelsius(arr){
    return arr.map(
        (item) => 
        Math.floor((Number(item.slice(0, -2)) - 32) * (5 / 9)).toString() +
        "°C"
)
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
        let upper = item.state.charAt(0).toUpperCase() + item.state.slice(1).toLowerCase();

        return `${cel}°Celsius in  ${item.city}, ${upper}`
    })
}




// console.log(citiesOnly(arr))
// console.log(upperCasingStates(arr))
console.log(fahrenheitToCelsius(arr))
// console.log(trimTemp(arr))
// console.log(tempForecasts(arr))