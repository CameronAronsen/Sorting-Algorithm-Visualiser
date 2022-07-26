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

// Asynchronous function to perform "Insertion Sort"
async function InsertionSort(delay = 100) {
    running = true;

    let bars = document.querySelectorAll(".bar");

    for (var i = 1; i < bars.length; i += 1) {
        if (running) {
            var j = i - 1;
            var key = parseInt(bars[i].childNodes[0].innerHTML);

            var height = bars[i].style.height;

            var barval = document.getElementById("ele")

            barval.innerHTML = `<h3>Element Selected is :${key}</h3>`;

            bars[i].style.backgroundColor = "darkblue";

            await new Promise(resolve => setTimeout(resolve, delay));

            while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
                delay = 500 - (speedSlider.value * 45)
                speedValue.innerHTML = "Current Speed: " + speedSlider.value
                bars[j].style.backgroundColor = "darkblue";

                bars[j + 1].style.height = bars[j].style.height;
                bars[j + 1].childNodes[0].innerText =
                    bars[j].childNodes[0].innerText;

                j = j - 1;

                await new Promise(resolve => setTimeout(resolve, delay));

                for (var k = i; k >= 0; k--) {
                    bars[k].style.backgroundColor = "#90cc85";
                }
            }

            // Placing the selected element to its correct position
            bars[j + 1].style.height = height;
            bars[j + 1].childNodes[0].innerHTML = key;

            // To pause the execution of code for 600 milliseconds
            await new Promise(resolve => setTimeout(resolve, delay));

            // Provide light green color to the ith bar
            bars[i].style.backgroundColor = "#90cc85";
        }



    }

    barval.innerHTML = "<h3></h3>";

    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#444444";

    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#444444";
};


generatebars();

speedValue.innerHTML = "Current Speed: " + speedSlider.value