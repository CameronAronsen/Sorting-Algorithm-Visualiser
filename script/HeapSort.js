const container = document.querySelector(".data-container");
const speedBar = document.getElementById("speedSlider")
const speedValue = document.getElementById("currentSpeed");

running = true;

// Function to generate bars
function generatebars(num = 20) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < num; i += 1) {

        const value = Math.floor(Math.random() * 100) + 1;

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;
        bar.style.transform = `translateX(${i * 30}px)`;


        const barLabel = document.createElement("label");
        barLabel.classList.add("bar__id");
        barLabel.value = value;
        barLabel.innerHTML = value;

        bar.appendChild(barLabel);
        container.appendChild(bar);
        container.style.transform = `translateX(${0 - (num * (15))}px)`
    }
}

// Function disables buttons when player begins sort
function disable() {
    document.getElementById("Button1").disabled = true;
    document.getElementById("Button1").style.backgroundColor = "#868B8E";

    document.getElementById("Button2").disabled = true;
    document.getElementById("Button2").style.backgroundColor = "#868B8E";

}

// Function enables buttons when sort finishes or player presses stop
function Enable() {
    var barval = document.getElementById("ele")
    barval.innerHTML = "<h3></h3>";

    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#444444";

    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#444444";

    document.getElementById("Button3").style.backgroundColor = "#444444";
}

// stops the sort
function Stop() {
    running = false;
}

// starts sorting
function StartSort(delay) {
    running = true
    var bars = document.querySelectorAll('.bar')
    console.log(MergeSort(delay, bars))
}

generatebars();

speedValue.innerHTML = "Current Speed: " + speedSlider.value