/**
 * Creates an instance of a circle
 * 
 * @param {number} x - The x-coordinate of the circle
 * @param {number} y - The y-coordinate of the circle
 * @example
 * const circle = new Circle(100, 200);
 */
class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.diameter = 50;
        this.isTrapped = false;
        this.HTML = null;
        this.draw();
        circles.push(this);
    }

    /**
     * "Draws" the circle by creating a div and appending it to the body
     * 
     * @example
     * circle.draw();
     */
    draw() {
        this.HTML = document.createElement("div");
        this.HTML.classList.add("circle");
        this.HTML.style.position = "absolute";
        this.HTML.style.top = this.y + "px";
        this.HTML.style.left = this.x + "px";
        this.HTML.style.background = "white";
        this.trapped();
        document.body.appendChild(this.HTML);
    }

    /**
     * Moves the circle to the given x and y coordinates
     * 
     * @param {number} x - The new x-coordinate of the circle
     * @param {number} y - The new y-coordinate of the circle
     * @example
     * circle.move(150, 250);
     */
    move(x, y) {
        this.trapped();
        if (!this.isTrapped) {
            this.x = x;
            this.y = y;
            this.HTML.style.top = this.y + "px";
            this.HTML.style.left = this.x + "px";
        } else {
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

    /**
     * Checks if the circle is inside the box
     * 
     * @example
     * circle.trapped();
     */
    trapped() {
        if (
            this.x > box.x &&
            this.x + this.diameter < box.x + box.width &&
            this.y > box.y &&
            this.y + this.diameter < box.y + box.height
        ) {
            this.isTrapped = true;
            this.HTML.style.background = "var(--purple)";
        } else {
            this.isTrapped = false;
            this.HTML.style.background = "white";
        }
    }

    /**
     * Checks if the given x and y coordinates for the circle are inside the box
     * 
     * @param {number} x - The x-coordinate to check
     * @param {number} y - The y-coordinate to check
     * @returns {boolean} Whether the coordinates are inside the box
     * @example
     * circle.inReactangle(150, 250);
     */
    inReactangle(x, y) {
        if (
            x > box.x &&
            x + this.diameter < box.x + box.width &&
            y > box.y &&
            y + this.diameter < box.y + box.height
        ) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Creates an instance of a box
 * 
 * @example
 * const box = new Box();
 */
class Box {
    constructor() {
        this.HTML = document.createElement("div");
        this.HTML.classList.add("box");
        this.HTML.style.position = "absolute";
        this.HTML.style.top = "50%";
        this.HTML.style.left = "50%";
        this.HTML.style.transform = "translate(-50%, -50%)";
        document.body.appendChild(this.HTML);
        this.x = this.HTML.offsetLeft - this.HTML.offsetWidth / 2 - 1; // -1 to account for the border
        this.y = this.HTML.offsetTop - this.HTML.offsetHeight / 2 - 1;
        this.width = this.HTML.offsetWidth + 1; // +1 to account for the border
        this.height = this.HTML.offsetHeight + 1;
    }
}

/**
 * Creates a new circle when the user clicks on the body
 * 
 * @param {MouseEvent} e - The mouse event
 * @example
 * document.body.addEventListener("click", createCircle);
 */
function createCircle(e) {
    if (e === undefined) return;
    new Circle(e.clientX - 25, e.clientY - 25