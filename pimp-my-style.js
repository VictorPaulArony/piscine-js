import { styles } from "./pimp-my-style.data.js"
let count = 0

export function pimp(){
    const button = document.querySelector(".button")
    if (count < styles.length){
        button.classList.add(styles[count])
        count++
        button.classList.remove("unpimp")
    }else {
        count--
        button.classList.remove(styles[count])
        button.classList.add("unpimp")
        
    }
    if(count === 0){
        button.classList.remove("unpimp")
    }
}
