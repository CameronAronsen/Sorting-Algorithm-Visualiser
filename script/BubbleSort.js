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
    BubbleSort(delay, bars)
}

// async function does bubble sort
async function BubbleSort(delay, array) {
    var barval = document.getElementById("ele")

    // get length of array
    var arrLen = array.length - 1

    var swapped = true

    // set all bars to blue
    array.forEach(element => element.style.backgroundColor = "#0093FF");

    // First loop for each item in the array
    for (var i = 0; i < arrLen; i++) {

        swapped = false;
        delay = 500 - ((document.getElementById('speedSlider').value) * 45)
        speedValue.innerHTML = "Current Speed: " + speedSlider.value
        await new Promise(resolve => setTimeout(resolve, delay));

        // Second loop for everything in the array
        for (var j = 0; j < arrLen - i; j++) {
            if (running) {

                // If color isnt blue, set it to blue
                if (j >= 1) {
                    array[j - 1].style.backgroundColor = "#0093FF"
                }

                // Set colors to green
                array[j].style.backgroundColor = "#6DBC5E"
                array[j + 1].style.backgroundColor = "#6DBC5E"

                barval.innerHTML = `<h3>Element Selected is :${array[j].firstChild.innerText}, Test element is ${array[j + 1].firstChild.innerText}</h3>`

                delay = 500 - ((document.getElementById('speedSlider').value) * 45)
                speedValue.innerHTML = "Current Speed: " + speedSlider.value
                await new Promise(resolve => setTimeout(resolve, delay));

                // If element is greater than element + 1, swap
                if (parseInt(array[j].firstChild.innerText) > parseInt(array[j + 1].firstChild.innerText)) {
                    swap(j, j + 1, array)
                    swapped = true;
                }
            } else {
                return
            }


        }

        // If there hasnt been a swap this loop, break the loop because it must be in the right position
        if (!swapped) {
            break;
        }

        // Set solved bars to purple
        array[array.length - 1 - i].style.backgroundColor = "#B700FF"
        array[array.length - 2 - i].style.backgroundColor = "#0093FF"

        delay = 500 - ((document.getElementById('speedSlider').value) * 45)
        speedValue.innerHTML = "Current Speed: " + speedSlider.value
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    // In case it breaks early or is finished, set all bars to purple, and enable buttons
    await new Promise(resolve => setTimeout(resolve, delay));
    array.forEach(element => element.style.backgroundColor = "#B700FF");
    Enable()
}

// Swap two items in the array. Doesnt actually swap them, just their heights and label content
function swap(start, end, array) {
    var tempHeight = array[start].style.height
    array[start].style.height = array[end].style.height
    array[end].style.height = tempHeight

    var tempLabel = array[start].firstChild.innerText
    array[start].firstChild.innerText = array[end].firstChild.innerText
    array[end].firstChild.innerText = tempLabel

}

generatebars();

speedValue.innerHTML = "Current Speed: " + speedSlider.value