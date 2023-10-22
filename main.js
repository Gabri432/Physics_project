function main() {
    //drawTriangle(45);

    document.getElementById("setAngle").addEventListener("change", getData);
    document.getElementById("setFriction").addEventListener("change", getFriction);

    animate(0);
}

main();