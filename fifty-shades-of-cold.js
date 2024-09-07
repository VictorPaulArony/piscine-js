import { colors } from "./fifty-shades-of-cold.data.js"

export function generateClasses(){
    const styler = document.createElement("style")
    document.head.appendChild(styler)

    const stylesheet = styler.sheet

    colors.forEach(color => {
        stylesheet.insertRule(` .${color} {background: ${color}}`, stylesheet.cssRules.length)
    })

}

export function generateColdShades(){
    const div = document.createElement("div")
    const coldColors = colors.filter(color => {
        /aqua|blue|turquoise|green|cyan|navy|purple/.test(color)
    })
    coldColors.forEach(color => {
        div.className = color
        div.textContent = color
        div.onclick = () => choseShade(color)
        document.body.appendChild(div)
    })

}

export function choseShade(){
    const divs = document.querySelectorAll("div");

    divs.forEach(div => {
    div.className = choseShade
    });
}