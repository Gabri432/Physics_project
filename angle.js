// Get a reference to the canvas element
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

// Define the starting point of the angle (vertex)
const beginX = 60;
const beginY = 40;
const radius = 100;

// Define the angle in deg (45 degrees in this example)
let angleInDeg = 45;

// Set the angle's color
context.strokeStyle = "black";

// Set line width
context.lineWidth = 2;

let targetX = 100;  // X coordinate of point B
let targetY = 125;  // Y coordinate of point B

// Drawing the Triangle
function drawTriangle(angleInDeg) {

    // Convert to radiants
    let angleInRad = (angleInDeg * Math.PI) / 180;

    // Define end points
    let endX = beginX + radius * Math.cos(angleInRad);
    let endY = beginY + radius * Math.sin(angleInRad);

    targetX = endX;
    targetY = endY - 5;

    // Draw the hypotenuse
    context.beginPath();
    context.moveTo(beginX, beginY);
    context.lineTo(endX, endY);
    context.stroke();

    // Draw the height
    context.beginPath();
    context.moveTo(beginX, beginY);
    context.lineTo(beginX, endY);
    context.stroke();

    // Draw the base
    context.beginPath();
    context.moveTo(beginX, endY);
    context.lineTo(endX, endY);
    context.stroke();

    context.closePath();

}


//Update the angle with the user-defined one.
function getData() {
    const angle = document.querySelector("input[name='angle']").value;
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawTriangle(angle);
}


