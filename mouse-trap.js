// Array to store all Circle instances
var circles = [];
var box; // Variable to store the box instance

// Circle class definition
class Circle {
    // Constructor to create an instance of a circle
    constructor(x, y) {
        this.x = x; // X-coordinate of the circle
        this.y = y; // Y-coordinate of the circle
        this.diameter = 50; // Diameter of the circle
        this.isTrapped = false; // Indicates if the circle is inside the box
        this.HTML = null; // Reference to the HTML element representing the circle
        this.draw(); // Draws the circle when instantiated
        circles.push(this); // Adds the circle to the circles array
    }

    // Draws the circle by creating a div and appending it to the body
    draw() {
        this.HTML = document.createElement("div"); // Create a new div element
        this.HTML.classList.add("circle"); // Add the "circle" class to the div
        this.HTML.style.position = "absolute"; // Position the div absolutely
        this.HTML.style.top = this.y + "px"; // Set the top position of the div
        this.HTML.style.left = this.x + "px"; // Set the left position of the div
        this.HTML.style.background = "white"; // Set the initial background color to white
        this.trapped(); // Check if the circle is trapped inside the box
        document.body.appendChild(this.HTML); // Append the circle to the body
    }

    // Moves the circle to the given x and y coordinates
    move(x, y) {
        this.trapped(); // Check if the circle is trapped inside the box
        if (!this.isTrapped) {
            // If not trapped, move the circle freely
            this.x = x;
            this.y = y;
            this.HTML.style.top = this.y + "px";
            this.HTML.style.left = this.x + "px";
        } else {
            // If trapped, restrict movement to within the box
            if (this.inReactangle(x, y)) {
                this.x = x;
                this.y = y;
                this.HTML.style.top = this.y + "px";
                this.HTML.style.left = this.x + "px";
            } else {
                if (this.inReactangle(x, this.y)) {
                    this.x = x;
                    this.HTML.style.left = this.x + "px";
                } else if (this.inReactangle(this.x, y)) {
                    this.y = y;
                    this.HTML.style.top = this.y + "px";
                }
            }
        }
    }

    // Checks if the circle is inside the box
    trapped() {
        if (
            this.x > box.x && // Check if the circle's left side is inside the box
            this.x + this.diameter < box.x + box.width && // Check if the circle's right side is inside the box
            this.y > box.y && // Check if the circle's top side is inside the box
            this.y + this.diameter < box.y + box.height // Check if the circle's bottom side is inside the box
        ) {
            this.isTrapped = true; // Set the circle as trapped
            this.HTML.style.background = "var(--purple)"; // Change the background color to purple
        } else {
            this.isTrapped = false; // Set the circle as not trapped
            this.HTML.style.background = "white"; // Reset the background color to white
        }
    }

    // Checks if the given x and y coordinates for the circle are inside the box
    inReactangle(x, y) {
        if (
            x > box.x && // Check if the x-coordinate is inside the box
            x + this.diameter < box.x + box.width && // Check if the right side is inside the box
            y > box.y && // Check if the y-coordinate is inside the box
            y + this.diameter < box.y + box.height // Check if the bottom side is inside the box
        ) {
            return true; // Return true if the coordinates are inside the box
        } else {
            return false; // Return false if the coordinates are outside the box
        }
    }
}

// Box class definition
class Box {
    constructor() {
        this.HTML = document.createElement("div"); // Create a new div element for the box
        this.HTML.classList.add("box"); // Add the "box" class to the div
        this.HTML.style.position = "absolute"; // Position the box absolutely
        this.HTML.style.top = "50%"; // Center the box vertically
        this.HTML.style.left = "50%"; // Center the box horizontally
        this.HTML.style.transform = "translate(-50%, -50%)"; // Adjust the box position to be fully centered
        document.body.appendChild(this.HTML); // Append the box to the body
        this.x = this.HTML.offsetLeft - this.HTML.offsetWidth / 2 - 1; // Calculate the box's x-coordinate (-1 accounts for the border)
        this.y = this.HTML.offsetTop - this.HTML.offsetHeight / 2 - 1; // Calculate the box's y-coordinate (-1 accounts for the border)
        this.width = this.HTML.offsetWidth + 1; // Set the box's width (+1 accounts for the border)
        this.height = this.HTML.offsetHeight + 1; // Set the box's height (+1 accounts for the border)
    }
}

// Event listener for click events on the body, used to create a new circle
document.body.addEventListener("click", (e) => {
    createCircle(e);
});

// Event listener for mousemove events on the body, used to move the last created circle
document.body.addEventListener("mousemove", (e) => {
    moveCircle(e);
});

// Function to create a new circle at the position of the mouse click
function createCircle(e) {
    if (e === undefined) return; // If the event is undefined, exit the function
    new Circle(e.clientX - 25, e.clientY - 25); // Create a new circle centered on the mouse click position
}

// Function to move the last created circle to the current mouse position
function moveCircle(e) {
    if (e === undefined || circles.length === 0) return; // If the event is undefined or no circles exist, exit the function
    circles[circles.length - 1].move(e.clientX - 25, e.clientY - 25); // Move the last created circle to the mouse position
}

// Function to set up the box on the page
function setBox() {
    box = new Box(); // Create a new box instance
}

// Export the functions for external use
export { createCircle, moveCircle, setBox };
