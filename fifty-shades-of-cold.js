
import { colors } from "./fifty-shades-of-cold.data.js";

/**
 * Generate CSS classes for each color in the colors array
 * 
 * This function creates a new `<style>` element, iterates over the colors array,
 * and adds a CSS class for each color. The class is defined with a background
 * color property set to the corresponding color value.
 * 
 
 */
export function generateClasses() {
    const head = document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    colors.forEach((color) => {
        style.innerHTML += `.${color} { background: ${color};}`;
    });
    console.log(style.innerHTML);
    head.appendChild(style);
}

/**
 * Generate HTML elements for each "cold" shade in the colors array
 * 
 * This function iterates over the colors array, checks if the color matches a
 * "cold" shade (aqua, blue, turquoise, green, cyan, navy, or purple), and
 * creates a new `<div>` element with the corresponding class and text content.
 */
export function generateColdShades() {
    const body = document.getElementsByTagName("body")[0];
    colors.forEach((color) => {
        if (
            color.match(/(aqua|blue|turquoise|green|cyan|navy|purple)/) !== null
        ) {
            const div = document.createElement("div");
            div.classList.add(color);
            div.innerHTML = color;
            body.appendChild(div);
        }
    });
}

/**
 * Set the class of all `<div>` elements to the specified shade
 * 
 * This function selects all `<div>` elements and sets their class to the
 * specified shade.
 */
export function choseShade(shade) {
    document.querySelectorAll("div").forEach((div) => {
        div.className = shade;
    });
}

