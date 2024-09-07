import { styles } from "./pimp-my-style.data.js"
let count = 0

export function pimp(){
    const button = document.querySelector(".button")
    if (!button.classList.contains("unpimp")){
        //add the next style class as long as the button contains pimp
        button.classList.add(styles[count])
        count++
        //check if we reach the end of the style array
        if (count === styles.length){
            button.classList.toggle("unpimp")// toggle unpimp on
        }
    }else {
        //removing the last added stlye class and if count is 0 toggle unpimp off
        count--
        button.classList.remove(styles[count])
        if(count === 0){
            button.classList.toggle("unpimp")
        }
        
    }
  
    
}
