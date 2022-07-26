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
function startSort(start, end, delay) {
    running = true
    quickSort(start, end, delay)
}

// Beings the sort. creates a partition in the middle of the array, loops recusively setting the start or end to the partition index
async function quickSort(start, end, delay) {
    var array = document.querySelectorAll('.bar')
    var index;
    var barval = document.getElementById("ele")

    speedValue.innerHTML = "Current Speed: " + speedSlider.value
    delay = 500 - (speedSlider.value * 45)
    if (running) {

        for (let x = 0; x <= array.length - 1; x++) {
            array[x].style.backgroundColor = "#0093FF";
        }

        if (array.length > 1) {

            index = await partition(start, end, array, delay);
            if (start < index - 1) { //more elements on the left side of the pivot
                await quickSort(start, index - 1, delay)
            }
            if (index < end) { //more elements on the right side of the pivot
                await quickSort(index, end, delay)
            }

        }



    }

    CheckFinished(array)

}

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

// Gets partition and swaps bars depending on the pivot
async function partition(start, end, array, delay) {

    // Set Values, Pivot item in middle, i value of first item, j value of last item
    var pivot = parseInt(array[Math.floor((end + start) / 2)].firstChild.innerText),
        i = start,
        j = end;

    var pivotBar = array[Math.floor((end + start) / 2)]

    //Change color of array being sorted
    for (let target = start; target <= end; target++) {
        array[target].style.backgroundColor = "#45A0BA"
    }

    // Setting colours of pivot, beginning, and end
    array[i].style.backgroundColor = "#31e20d";
    array[j].style.backgroundColor = "red";
    pivotBar.style.backgroundColor = "Purple";
    var barval = document.getElementById("ele")
    barval.innerHTML = `<h3>Left Element is: ${parseInt(array[i].firstChild.innerText)}, Pivot is: ${parseInt(array[Math.floor((end + start) / 2)].firstChild.innerText)}, Right Element is ${parseInt(array[j].firstChild.innerText)} </h3>`;



    await new Promise(resolve => setTimeout(resolve, delay));

    // While start is less than end
    loop1:
        while (i <= j) {
            if (running) {
                loop2: while (parseInt(array[i].firstChild.innerText) < pivot) {
                    if (running) {
                        i++;
                        array[i].style.backgroundColor = " rgb(49, 226, 13)";
                        pivotBar.style.backgroundColor = "Purple";
                        barval.innerHTML = `<h3>Left Element is: ${parseInt(array[i].firstChild.innerText)}, Pivot is: ${parseInt(array[Math.floor((end + start) / 2)].firstChild.innerText)}, Right Element is ${parseInt(array[j].firstChild.innerText)} </h3>`;
                        speedValue.innerHTML = "Current Speed: " + speedSlider.value
                        delay = 500 - (speedSlider.value * 45)
                        await new Promise(resolve => setTimeout(resolve, delay));
                    } else {
                        break loop2
                    }

                }
                loop3: while (parseInt(array[j].firstChild.innerText) > pivot) {
                    if (running) {
                        j--;
                        array[j].style.backgroundColor = "red";
                        pivotBar.style.backgroundColor = "Purple";
                        barval.innerHTML = `<h3>Left Element is: ${parseInt(array[i].firstChild.innerText)}, Pivot is: ${parseInt(array[Math.floor((end + start) / 2)].firstChild.innerText)}, Right Element is ${parseInt(array[j].firstChild.innerText)} </h3>`;
                        speedValue.innerHTML = "Current Speed: " + speedSlider.value
                        delay = 500 - (speedSlider.value * 45)
                        await new Promise(resolve => setTimeout(resolve, delay));
                    } else {
                        break loop3;
                    }

                }
                if (i <= j) {
                    swap(i, j, array); //sawpping two elements
                    i++;
                    j--;

                    //This breaks if j is less than 0 and completely bricks the program
                    if (j > -1) {
                        array[i].style.backgroundColor = " rgb(49, 226, 13)";
                        array[j].style.backgroundColor = "red";
                        pivotBar.style.backgroundColor = "Purple";
                        barval.innerHTML = `<h3>Left Element is: ${parseInt(array[i].firstChild.innerText)}, Pivot is: ${parseInt(array[Math.floor((end + start) / 2)].firstChild.innerText)}, Right Element is ${parseInt(array[j].firstChild.innerText)} </h3>`;
                    }

                    speedValue.innerHTML = "Current Speed: " + speedSlider.value
                    delay = 500 - (speedSlider.value * 45)
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
            else {
                break loop1;

            }

        }
    return i;
}


generatebars();

speedValue.innerHTML = "Current Speed: " + speedSlider.value