export function getArchitects(){
    const architects = Array.from(document.querySelectorAll("body a"));
    const nonArchitects = Array.from(document.querySelectorAll("body span"));
    return [architects, nonArchitects]

}

export function getClassical(){
    const [architects, _] = getArchitects()
    const classical = architects.filter(person => person.classe === 'classical')
    const nonclassical = architects.filter(person => person.classe !== 'classical')
    return [classical, nonclassical]
}

export function getActive(){
    const [classical, _] = getClassical()
    const active = classical.filter(person => person.active === true)
    const inactive = classical.filter(person => person.active === false)
    return [active, inactive]
}

export function getBonannoPisano(){
    const [active, _] = getActive()
    const bon = active.filter(person => person.id === 'BonannoPisano')
    const nonbon = active.filter(person => person.id !== 'BonannoPisano')
    return [bon, nonbon]
}

