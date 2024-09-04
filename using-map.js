
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
   return arr.map((item) =>
        item
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ")
    );

}
function fahrenheitToCelsius(arr) {
    return arr.map(item => {
        // Check if item.temperature exists and is a string
        if (typeof item.temperature === 'string') {
            // Extract numeric value from the temperature string
            let temp = parseFloat(item.temperature.replace(/[^0-9.]/g, ''));
            
            // Convert Fahrenheit to Celsius
            let cel = Math.round((temp - 32) * 5 / 9);
            
            // Return the Celsius temperature as a string with '°C' suffix
            return cel.toString() + '°C';
        } else {
            // If temperature is not a string, return a default value or handle it appropriately
            return 'Invalid Temperature';
        }
    });
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
// console.log(fahrenheitToCelsius(arr))
// console.log(trimTemp(arr))
// console.log(tempForecasts(arr))