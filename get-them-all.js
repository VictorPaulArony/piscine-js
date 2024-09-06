export function getArchitects(){
    const people = document.querySelectorAll("*")
    const arts =[]
    const nonart = []
     people.forearch(person => {
        if (person.tag === 'a'){
            arts.push(person.id)
        } else {
            nonart.push(person.id)
        }
     } )
     return [arts, nonart]
}

export function getClassical(){
    const [arts, _] = getArchitects()
    const classical = arts.filter(person => person.classe === 'classical')
    const nonclassical = arts.filter(person => person.classe !== 'classical')
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

