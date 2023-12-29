var spawnIntensity = 100 //wait for
var spawnCounter = 0
var paused = true;
var mainLoop;

document.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "ArrowRight":
            moveRight()
            break;
        case "ArrowLeft":
            moveLeft()
            break;

        case "r":
            restart();
            break;

     

        default:
            break;
    }

})


 

function restart() {
    clearInterval(mainLoop)
    initRoad();
    spawnPlayer();
    play()
}

function play() {
    paused = false;
    mainLoop = setInterval(function () {
        if (!steer()) {
            initRoad()
            clearInterval(mainLoop);
        }
        

        
        if (spawnCounter > spawnIntensity) {
            spawnCar()
            spawnCounter = 0
        }
        spawnCounter += 1

    }, refreshRate)

}






restart()

spawnCar()