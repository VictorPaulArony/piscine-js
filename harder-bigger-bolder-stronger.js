function generateLetters() {
    for (let i = 0; i < 120; i++) {
        let letter = document.createElement("div");
        
        letter.style.fontSize = `${11 + i}px`;
        
        // Generate a random uppercase letter
        letter.textContent = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        
        // Set font weight based on the letter's position
        if (i < 40) {
            letter.style.fontWeight = "300"; // First third
        } else if (i < 80) {
            letter.style.fontWeight = "400"; // Second third
        } else {
            letter.style.fontWeight = "600"; // Last third
        }
        
        document.getElementsByTagName("body")[0].appendChild(letter); // Append the letter div to the body

}
}

// Export the generateLetters function
export { generateLetters };
