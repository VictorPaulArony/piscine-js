export function getArchitects(){
    const architects = Array.from(document.querySelectorAll("a"));
    const nonArchitects = Array.from(document.querySelectorAll("*:not(a)"));
    return [architects, nonArchitects]

}

export function getClassical(){
    const [architects, _] = getArchitects()
   const classical = architects.filter(architect => architect.classList.contains("classical"))
   const nonclassical = architects.filter(architects => !architects.classList.contains("classical"))
    return [classical, nonclassical]
}

export function getActive(){
    const [classical, _] = getClassical()
    const active = classical.filter(architect => architect.classList.contains("active"))
    const inactive = classical.filter(architect => !architect.classList.contains("active"))
    return [active, inactive]
}

export function getBonannoPisano(){
    const [active, _] = getActive()
   const bon = active.filter(architect => architect.classList.contains('BonannoPisano'))
   const nonbon = active.filter(architect => !architect)
    return [bon, nonbon]
}

