var score = 0

const refreshRate = 24 //ms
const speed = 1; // 

var currentTrack = parseInt((tracksNum - 1) / 2)
var player;

var direction ;

function spawnPlayer() {
    direction = 2 * Math.random() - 1;
    relativePos = 0;

    const trk = document.getElementById(`track#${currentTrack}`);

    player = document.createElement("div");
    player.classList.add("car")
    player.id = "player"

    player.style.width = `${trackWidth * 2 / 3}px`
    player.style.height = `${trackWidth * 4 / 3}px`


    player.style.bottom = `${trackWidth / 3}px`


    trk.appendChild(player);

}



function steer() {

    if (relativePos * speed > trackWidth / 6 + trackWidth * 2) {
        console.log("off track")
        return 0;
    }
    if (-relativePos * speed > trackWidth / 6 + trackWidth * 2) {
        console.log("off track")
        return 0;
    }

    if (direction != 0) {
        relativePos -= direction
        player.style.right = `${relativePos * speed}px`
        player.style.transform = `rotate(${direction*speed/3}deg)`
    }
    return 1;

}




function moveLeft() {
    direction -= 1
}

function moveRight() {
    direction += 1
}