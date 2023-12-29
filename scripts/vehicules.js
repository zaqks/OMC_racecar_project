var obstacles = []
var carId = 0;



function spawnCar() {
    var spawnTrack = parseInt(Math.random() * (tracksNum - 1))
    spawnTrack = `track#${spawnTrack}`

    var car = document.createElement("div")
    car.classList.add("car")
    car.classList.add("obstacle")

    car.id = `car#${carId}`
    carId += 1

    car.style.width = `${trackWidth * 2 / 3}px`
    car.style.height = `${trackWidth * 4 / 3}px`

    var currentPos = window.innerHeight
    car.style.bottom = `${currentPos}px`



    document.getElementById(spawnTrack).appendChild(car)

    var carAnim = setInterval(function () {
        if (currentPos < -trackWidth * 4 / 3) {
            document.getElementById(spawnTrack).removeChild(document.getElementById(car.id))
            score += 10
            document.getElementById("score").innerText = score
            clearInterval(carAnim)
        }

        currentPos -= speed * 5
        car.style.bottom = `${currentPos}px`
    }, refreshRate);
    obstacles.push(carAnim)
}


