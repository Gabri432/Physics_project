const defaultInitialSpeed = 1 //1 pixels per milliseconds
const defaultMaxSpeed = 150 //50 pixels per milliseconds

// Circle properties
const circle = {
  x: 60,  // Initial X coordinate (point A)
  y: 35,  // Initial Y coordinate (point A)
  radius: 5,
  speed: defaultInitialSpeed,  // Pixels per millisecond (adjust to control the speed)
  acceleration: 0.1 // Acceleration
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

  const elapsed = (timestamp - lastTimestamp) / 1000; //converting to seconds
  lastTimestamp = timestamp;

  const distance = circle.speed * elapsed;
  const angle = Math.atan2(Math.abs(targetY  - circle.y), targetX  - circle.x);
  const dx = Math.cos(angle) * distance;
  const dy = Math.sin(angle) * distance;

  // circle speed is given from the angle and the acceleration
  circle.speed += circle.acceleration * elapsed + defaultInitialSpeed * (angle * (180 / Math.PI) / defaultAngleDeg);

  circle.speed = Math.min(circle.speed, defaultMaxSpeed);
  console.log(circle.speed);

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
    circle.speed = 0; //Reset to initial speed
  }

  if (targetY < circle.y) {
    circle.x = 60; // Reset to the initial X coordinate
    circle.y = 35; // Reset to the initial Y coordinate
    circle.speed = 0; //Reset to initial speed
  }
}

function animate(timestamp) {
  updateCirclePosition(timestamp);
  getData();
  drawBall();
  setTimeout(() => requestAnimationFrame(animate), 1000 / 60);
}
