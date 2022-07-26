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

//Starts the sorting
function StartSort(delay) {
    running = true;
    var bars = document.querySelectorAll('.bar')
    SelectionSort(bars, delay)
}

//Checks if the array is correct
function CheckFinished(array) {
    loop1: for (let x = 0; x <= array.length - 1; x++) {
        if (x == array.length - 1) {
            Enable()
            Stop()
            for (let x = 0; x <= array.length - 1; x++) {
                array[x].style.backgroundColor = "#90cc85";
            }
        } else {
            if (parseInt(array[x].firstChild.innerText) <= parseInt(array[x + 1].firstChild.innerText)) {

            } else {
                break loop1;
            }
        }

    }

}

// Function swaps the heights and labels of the bars
function swap(start, end, array) {
    var tempHeight = array[start].style.height
    array[start].style.height = array[end].style.height
    array[end].style.height = tempHeight

    var tempLabel = array[start].firstChild.innerText
    array[start].firstChild.innerText = array[end].firstChild.innerText
    array[end].firstChild.innerText = tempLabel

}

async function SelectionSort(array, delay) {
    var barval = document.getElementById("ele")

    loop1: for (let i = 0; i < array.length; i++) {
        let min = i;

        await new Promise(resolve => setTimeout(resolve, delay));
        for (let j = i + 1; j < array.length; j++) {
            barval.innerHTML = `<h3>Test Element is: ${parseInt(array[i].firstChild.innerText)}, Min Element is ${parseInt(array[min].firstChild.innerText)} </h3>`;
            if (running) {
                array[i].style.backgroundColor = "#c45f3b"
                await new Promise(resolve => setTimeout(resolve, delay));
                array[j].style.backgroundColor = "#56ab54"
                if (parseInt(array[j].firstChild.innerText) < parseInt(array[min].firstChild.innerText)) {
                    if (min != i) {
                        array[min].style.backgroundColor = "#56ab54"
                    }
                    min = j;
                    array[min].style.backgroundColor = "purple"
                }
                speedValue.innerHTML = "Current Speed: " + speedSlider.value
                delay = 500 - (speedSlider.value * 45)
            } else {
                break loop1;
            }

        }
        if (min != i) {
            swap(i, min, array)
        }

        for (let x = 0; x < array.length; x++) {
            array[x].style.backgroundColor = "#0093FF"
        }
    }
    for (let x = 0; x < array.length; x++) {
        array[x].style.backgroundColor = "#0093FF"
    }

    CheckFinished(array)
}




generatebars();

speedValue.innerHTML = "Current Speed: " + speedSlider.value