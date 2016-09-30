window.addEventListener("keyup", checkKeyPressed, false);

function checkKeyPressed(e) {
    if (e.keyCode == "65") {
        console.log("The 'a' key is pressed.");
        moveLeft();
    } else if (e.keyCode == "83") {
        console.log("The 's' key is pressed.");
        moveDown();
    } else if (e.keyCode == "68") {
        console.log("The 'd' key is pressed.");
        moveRight();
    } else if (e.keyCode == "87") {
        console.log("The 'w' key is pressed.");
        moveUp();
    }
}



function mainLoop() {
    drawScreen();
    requestAnimationFrame(mainLoop);
}

// Start things off
requestAnimationFrame(mainLoop);
