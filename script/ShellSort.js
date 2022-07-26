// TODO: Understand More and Make it look better

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
    ShellSort(delay, bars)
}

//Shell Sorts the array
async function ShellSort(delay, array) {
    var barval = document.getElementById("ele")
    running = true;
    let arrLen = array.length;
    loop1:
        for (let gap = Math.floor(arrLen / 2); gap > 0; gap = Math.floor(gap / 2)) {

            for (let i = gap; i < arrLen; i += 1) {
                for (let x = 0; x < array.length; x++) {
                    array[x].style.backgroundColor = "#0093FF"
                }
                let tempHeight = array[i].style.height;
                let tempLabel = array[i].firstChild.innerText
                array[i].style.backgroundColor = "blue"
                array[gap].style.backgroundColor = "#6DBC5E"

                let j;
                for (j = i; j >= gap && parseInt(array[j - gap].firstChild.innerText) > parseInt(tempLabel); j -= gap) {
                    if (running) {
                        array[j].style.backgroundColor = "#6DBC5E"
                        array[j - gap].style.backgroundColor = "black"

                        barval.innerHTML = `<h3>Element Selected is :${array[j].firstChild.innerText}, Gap is: ${array[gap].firstChild.innerText}, test element is ${array[j - gap].firstChild.innerText}</h3>`

                        delay = 500 - ((document.getElementById('speedSlider').value) * 45)
                        speedValue.innerHTML = "Current Speed: " + speedSlider.value
                        await new Promise(resolve => setTimeout(resolve, delay));

                        array[j].style.height = array[j - gap].style.height
                        array[j].firstChild.innerText = array[j - gap].firstChild.innerText
                    } else {
                        break loop1
                    }

                }

                delay = 500 - ((document.getElementById('speedSlider').value) * 45)
                speedValue.innerHTML = "Current Speed: " + speedSlider.value
                await new Promise(resolve => setTimeout(resolve, delay));

                array[j].style.height = tempHeight;
                array[j].firstChild.innerText = tempLabel;

            }
        }

    await new Promise(resolve => setTimeout(resolve, delay));
    if (running) {
        array.forEach(element => element.style.backgroundColor = "#B700FF");
    } else {
        array.forEach(element => element.style.backgroundColor = "#0093FF");
    }
    Enable()
}

generatebars();

speedValue.innerHTML = "Current Speed: " + speedSlider.value