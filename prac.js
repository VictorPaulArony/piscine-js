export const getArchitects = () =>{
    const archs = Array.from(document.querySelectorAll("classical"))
    // const archs = Array.
    const  nonArchs = Array.from(document.querySelectorAll("*:not(classical)"))
    return [archs, nonArchs]
}
export const getClassical = () => {
    const [archs, _] = getArchitects()
    const classical = Array.filter(archs => archs.classList.contains("classial"))
    const nonClas = Array.filter(archs => !archs.classList.contains("classical"))
    return[classical, nonClas]
}
export const getActive = () =>{
    const [classical, _] = getActive()
    const act = Array.filter(classical => classical.classList.contains("active") )
    const inact = Array.filter(classical => !classical.classList.contains("active") )

    return [act, inact]
}
export function getBonannoPisano(){
    const [act, _] = getActive()
    const bonanno = Array.filter(act => act.classList.contains("BonannoPisano"))
    // const bon = Array.filter(act => !act.classList.contains("BonannoPisano"))
    return[bonanno]
}