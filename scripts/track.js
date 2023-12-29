const road = document.getElementById("road");

var trackWidth = 0;
const tracksNum = 7;

function initRoad() {
    score = 0;
    document.getElementById("score").innerHTML = "0"

    for (var i = 0; i < obstacles.length; i++) {
        clearInterval(obstacles[i])
    }

    obstacles = []

    road.innerHTML = "";

    trackWidth = window.innerWidth;
    trackWidth -= trackWidth * 0.6;
    trackWidth /= tracksNum;

    for (var i = 0; i < tracksNum; i++) {
        var newTrack = document.createElement("div")
        newTrack.classList.add("track")
        newTrack.id = `track#${i}`

        road.appendChild(newTrack)
    }

}