export function getArchitects(){
    const architects = Array.from(document.querySelectorAll("body a"));
    const nonArchitects = Array.from(document.querySelectorAll("body span"));
    return [architects, nonArchitects]

}

export function getClassical(){
   const classical = Array.from(document.querySelectorAll("a.classical"))
   const nonclassical = Array.from(document.querySelectorAll("a:not(.classical"))
    return [classical, nonclassical]
}

export function getActive(){
    const active = Array.from(document.querySelectorAll("a.classical.active"))
    const inactive = Array.from(document.querySelectorAll.querySelectorAll("a.classical:not(.active"))
    return [active, inactive]
}

export function getBonannoPisano(){
   const bon = Array.from(document.querySelectorAll("a.classical.active.bonanno-pisano"))
   const nonbon = Array.from(document.querySelectorAll("a.classical.active:not(.bonanno-pisano"))
    return [bon, nonbon]
}

