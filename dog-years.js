
function dogYears(planetName, seconds){
    const orbit = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,
    }

    const secondsinearth = 31557600
    const earthyear = seconds / secondsinearth
    if (!orbit[planetName]){
        return ("INVALID PLANET")
        
    }

    const planetyears  = earthyear /orbit[planetName]
    

    const dogyears = planetyears * 7

    return Number(dogyears.toFixed(2))

}

console.log(dogYears("earth", 1000000000))