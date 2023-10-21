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

function drawRectangle(angleInDeg) {
    
    // Convert to radiants
    let angleInRad = (angleInDeg * Math.PI) / 180;

    // Define end points
    let endX = beginX + radius * Math.cos(angleInRad);
    let endY = beginY + radius * Math.sin(angleInRad);
    console.log(angleInDeg, endX, endY)

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

drawRectangle(45);

document.getElementById("setAngle").addEventListener("change", getData);

function getData() {
        const angle = document.querySelector("input[name='angle']").value;
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawRectangle(angle);
}
