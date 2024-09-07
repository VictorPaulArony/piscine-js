import { styles } from "./pimp-my-style.data.js"
let count = 0

export function pimp(){
    const button = document.querySelector(".button")
    if (count < styles.length){
        button.classList.add(styles[count])
        count++
    }else {
        count--
        button.classList.remove(styles[count])
        button.classList.toggle("unpimp")
        if(count === 0){
            button.classList.toggle("unpimp")
        }
        
    }
    if (count === styles[count]){
        button.classList.toggle("unpimp")
    }
    
}
