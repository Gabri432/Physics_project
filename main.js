// Ottieni il riferimento all'elemento canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Parametri della palla
const radius = 20; // Raggio della palla
let x = canvas.width / 2; // Posizione iniziale x
let y = canvas.height - radius; // Posizione iniziale y
let speedX = 2; // Velocità orizzontale
let speedY = -2; // Velocità verticale
const gravity = 0.1; // Gravità
const friction = 0.98; // Attrito
const slopeAngle = 30; // Angolo del piano inclinato (in gradi)

// Funzione per disegnare la palla
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

// Funzione per aggiornare la posizione della palla
function updateBallPosition() {
    // Applica la gravità
    speedY += gravity;

    // Applica l'attrito
    speedX *= friction;

    // Calcola la nuova posizione della palla
    const slopeAngleRadians = (slopeAngle * Math.PI) / 180;
    const slopeFactor = Math.tan(slopeAngleRadians);

    x += speedX;
    y += speedY;

    // Se la palla colpisce il piano inclinato
    if (y >= canvas.height - radius) {
        y = canvas.height - radius;
        speedY = -speedY * friction;
        speedX += speedY * slopeFactor;
    }

    // Disegna la palla
    drawBall();
}

// Funzione di animazione
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateBallPosition();
    requestAnimationFrame(animate);
}

// Avvia l'animazione
animate();
