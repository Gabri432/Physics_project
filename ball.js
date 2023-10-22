const defaultSpeed = 50 //50 pixels per milliseconds

// Circle properties
const circle = {
  x: 60,  // Initial X coordinate (point A)
  y: 35,  // Initial Y coordinate (point A)
  radius: 5,
  speed: defaultSpeed,  // Pixels per millisecond (adjust to control the speed)
};

let lastTimestamp = 0;
let defaultAngleDeg = 45;

function drawBall() {
  context.beginPath();
  context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  context.fillStyle = 'red';
  context.fill();
  context.closePath();
}

function updateCirclePosition(timestamp) {
  if (!lastTimestamp) lastTimestamp = timestamp;

  const elapsed = (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;

  const distance = circle.speed * elapsed;
  const angle = Math.atan2(Math.abs(targetY  - circle.y), targetX  - circle.x);
  const dx = Math.cos(angle) * distance;
  const dy = Math.sin(angle) * distance;

  circle.speed = defaultSpeed * (angle * (180 / Math.PI) / defaultAngleDeg);
  console.log(targetY > circle.y, targetX > circle.x);
  //previousAngleDeg = angle;

  if (Math.abs(circle.x - targetX) < Math.abs(dx)) {
    circle.x = targetX;
    circle.y = targetY;
  } else {
    circle.x += dx;
    circle.y += dy;
  }

  if (circle.x === targetX && circle.y === targetY) {
    circle.x = 60; // Reset to the initial X coordinate
    circle.y = 35; // Reset to the initial Y coordinate
  }

  if (targetY < circle.y) {
    circle.x = 60; // Reset to the initial X coordinate
    circle.y = 35; // Reset to the initial Y coordinate
  }
}

function animate(timestamp) {
  updateCirclePosition(timestamp);
  getData();
  drawBall();
  setTimeout(() => requestAnimationFrame(animate), 1000 / 60);
}

//animate(0);
