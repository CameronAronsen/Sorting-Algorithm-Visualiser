//DO THIS LATER

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

        var value = Math.floor(Math.random() * 100) + 1;

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

function GetValue(idx) {
    var bars = document.querySelectorAll('.bar')
    return parseInt(bars[idx].firstChild.innerText)
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

// Sets value, if running is false, the program will stop
function Stop() {
    running = false;
}

var barval = document.getElementById("ele");
var colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    //Starts the sorting
async function StartSort(delay) {
    var bars = document.querySelectorAll('.bar')
    var newBars = Array.from(bars)
    let sorted = await MergeSort(newBars, delay).then(x => { return x })
    for (x = 0; x < sorted.length; x++) {
        bars[x].style.height = `${parseInt(sorted[x].firstChild.value) * 3}px`
        bars[x].style.backgroundColor = "#6DBC5E"
    }
    for (x = 0; x < sorted.length; x++) {
        let val = sorted[x].firstChild.value
        bars[x].firstChild.innerText = val
    }
}

async function MergeSort(array, delay) {
    var half = Math.round(array.length / 2)
    if (array.length < 2) {
        return array
    }
    const left = array.splice(0, half)
    let newLeft = await MergeSort(left).then(x => { return x });
    let newRight = await MergeSort(array).then(x => { return x });
    return await Merge(newLeft, newRight, delay)
}


async function Merge(left, right, delay) {
    let arr = []
    while (left.length && right.length) {
        if (parseInt(left[0].firstChild.value) < parseInt(right[0].firstChild.value)) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    if (!left.length) {
        while (right.length) {
            arr.push(right.shift())
        }
    } else if (!right.length) {
        while (left.length) {
            arr.push(left.shift())
        }
    }
    return arr
}


generatebars();

speedValue.innerHTML = "Current Speed: " + speedSlider.value