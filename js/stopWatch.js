let hours = 00;
let mint = 00
let second = 00

let hoursView = document.getElementById("Hours")
let minView = document.getElementById("Minute")
let secView = document.getElementById("Second")

let startBtn = document.getElementById("TimeStart")
let stopBtn = document.getElementById("TimeStop")
let resetBtn = document.getElementById("TimeReset")

let timeCounter;

let isTrue = true




startBtn.addEventListener('click', function () {

    if (isTrue) {
        timeCounter = setInterval(timerFunc, 1000)

    }
    isTrue = false
})


stopBtn.addEventListener('click', function () {

    clearInterval(timeCounter)
    isTrue = true
})


resetBtn.addEventListener('click', function () {

    clearInterval(timeCounter)

    hours = 0
    mint = 0
    second = 0
    isTrue = true

    hoursView.innerHTML = "00"
    minView.innerHTML = "00"
    secView.innerHTML = "00"

})

function timerFunc() {
    second = second + 1

    if (second === 61) {

        second = 0
    }

    stopWatch(second)

}


function stopWatch(second) {


    if (second <= 9) {

        secView.innerHTML = "0" + second
    } else {

        secView.innerHTML = second
    }

    if (second === 60) {

        mint = mint + 1;
        minView.innerHTML = "0" + mint;
    }

    if (mint > 9) {

        minView.innerHTML = mint
    }

    if (mint == 60) {
        mint = 0;

        hours = hours + 1;

        hoursView.innerHTML = "0" + hours
    }

    if (hours > 9) {

        hoursView.innerHTML = hours
    }

    if (hours == 24) {

        clearInterval(timeCounter)
    }
}


// Dark And Light Mode Function

let timerbox = document.getElementById("timerBox")
let container = document.getElementById("container")
let darkBtn = document.getElementById("darkBtn")
let lightBtn = document.getElementById("lightBtn")

darkBtn.addEventListener('click', function () {

    timerbox.classList.add('darkBox')
    container.style.background = "#000"
})

lightBtn.addEventListener('click', function () {

    timerbox.classList.remove('darkBox')
    container.style.background = "#fff"
})