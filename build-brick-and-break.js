export function build(){
    let body = document.getElementById("body")[0]
    let bricks = 1
    let inter = setInterval(() => {
        if (bricks > n){
            clearInterval(inter)
            return
        }
        bricks++
        let brk = document.createElement("div")
        brk.setAttribute("id", "brick-" + bricks)
        if (bricks%3 === 2){_
        brk.dataset.foundation = true
        }
        body.appendChild(brk)
       
    }, 100)
}
export function destroy(...ids){
    ids.forEach((id) => {
        let brick = document.getElementById(id)
        if (brick){
            if(brick.dataset.foundation){
                brick.dataset.repaired = "in progress"
            }else {
                brick.dataset.repaired = "true"
            }
        }
    })
}

export function destroy(){
    let bricks = document.getElementById("div")
    if (bricks.length >0){
        bricks[bricks.length-1].remove()
    }
}