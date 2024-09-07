import { colors } from "./fifty-shades-of-cold.data.js";

function generateClasses() {
    const head = document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    head.appendChild(style); // Append the style element to the head

    colors.forEach((color) => {
        style.sheet.insertRule(`.${color} { background: ${color}; color: white; padding: 20px; margin: 10px; text-align: center; cursor: pointer; }`, style.sheet.cssRules.length);
    });
}

function generateColdShades() {
    const body = document.getElementsByTagName("body")[0];
    colors.forEach((color) => {
        if (color.match(/(aqua|blue|turquoise|green|cyan|navy|purple)/)) {
            const div = document.createElement("div");
            div.classList.add(color);
            div.innerHTML = color;
            div.addEventListener('click', () => chooseShade(color)); // Add click event listener
            body.appendChild(div);
        }
    });
}

function chooseShade(shade) {
    document.querySelectorAll("div").forEach((div) => {
        if (!div.classList.contains(shade)) { // Only change classes for divs that are not the clicked one
            div.className = shade; // Change the class to the chosen shade
        }
    });
}

// Export the functions
export { generateClasses, generateColdShades, chooseShade };
