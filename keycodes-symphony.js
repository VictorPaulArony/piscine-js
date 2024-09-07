// Add an event listener to the document that listens for any keydown event (when a key is pressed).
document.addEventListener("keydown", function (event) {
    // When a key is pressed, the `compose` function is called, passing the event object.
    compose(event);
});

// The `compose` function handles keydown events and performs different actions based on the key pressed.
export function compose(e) {
    // If the event object is undefined (though this shouldn't happen in this context), the function returns immediately.
    if (e === undefined) {
        return;
    }

    // Check if the key pressed corresponds to a lowercase alphabet letter (from 'a' to 'z').
    // This is done by checking if the character code of the key is between 97 ('a') and 122 ('z').
    if (
        [...Array(26).keys()].map((i) => i + 97).includes(e.key.charCodeAt(0))
    ) {
        // Create a new div element to represent a note.
        let div = document.createElement("div");
        // Add the "note" class to the div for styling purposes.
        div.classList.add("note");

        // Set the background color of the div based on the key pressed.
        // The color is a shade of gray determined by the position of the letter in the alphabet.
        div.style.backgroundColor = `rgb(${
            (255 / 26) * (e.key.charCodeAt(0) - 97)
        }, ${(255 / 26) * (e.key.charCodeAt(0) - 97)}, ${
            (255 / 26) * (e.key.charCodeAt(0) - 97)
        })`;

        // Set the inner text of the div to the key that was pressed.
        div.innerHTML = e.key;

        // Append the div to the body of the document, making it visible on the page.
        document.body.appendChild(div);
    } 
    // If the "Backspace" key is pressed, remove the last added note (div) from the page.
    else if (e.key === "Backspace") {
        let notes = document.getElementsByClassName("note");
        // Remove the last note in the list.
        notes[notes.length - 1].remove();
    } 
    // If the "Escape" key is pressed, remove all notes (divs) from the page.
    else if (e.key === "Escape") {
        let notes = document.getElementsByClassName("note");
        // Continue removing the first note in the list until all notes are removed.
        while (notes.length > 0) {
            notes[0].remove();
        }
    }
}
