
const startBtn = document.querySelector("#startBtn");
const countdown = document.querySelector("#countdown");

let timer;
let number = 10;

startBtn.addEventListener("click", function() {
    clearInterval(timer);
    number = 10;
    countdown.textContent = number;

    timer = setInterval(function() {
        number--;

        if (number > 0) {
            countdown.textContent = number;
        } else {
            countdown.textContent = "час вийшов!";
            clearInterval(timer);
        }
    }, 1000);
});

const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

const lights = [
    { element: red, time: 4000 },
    { element: yellow, time: 1000 },
    { element: green, time: 3000 },
    { element: yellow, time: 1000 }
];

let currentLight = 0;

function changeLight() {
    red.classList.remove("active");
    yellow.classList.remove("active");
    green.classList.remove("active");

    const light = lights[currentLight];

    light.element.classList.add("active");

    setTimeout(function() {
        currentLight = (currentLight + 1) % lights.length;
        changeLight();
    }, light.time);
}

changeLight();
