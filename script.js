const container = document.querySelector(".container");
const btnSize = document.querySelector(".pixel-size");
const btnRainbow = document.querySelector(".rainbow");
const btnGrey = document.querySelector(".grey-scale");
const btnErase = document.querySelector(".erase");
const btnClear = document.querySelector(".clear");
const btnBlack = document.querySelector(".black");
let color = "";

function createGrid (userInput) {
    let userNumber = userInput*userInput;
    const boxSize = 320/userInput;

    for (let i = 0; i<userNumber; i++) {
        let childDiv = document.createElement("div")
        container.appendChild(childDiv);
        childDiv.setAttribute("class", "children")
        childDiv.style.height = `${boxSize}px`;
        childDiv.style.width = `${boxSize}px`;
    };
    let children = Array.from(document.querySelectorAll(".children"));
    children.forEach(function(child){
        child.addEventListener("mouseover", pixelColor)
    })
}

function pixelSize () {
    let pixels = container.querySelectorAll("div");
    pixels.forEach(pixel => pixel.remove());
    createGrid(window.prompt("give me a number between 1 - 50"));
}

function pixelColor () {
    switch (color) {
        case "grey-scale":            
            if (this.style.backgroundColor.match(/rgba/)) {
                let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
                if (currentOpacity < 0.9) {
                    currentOpacity += 0.1;
                    this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
                    this.classList.add("grey");
                }
            } else if (this.classList == "grey" && this.style.backgroundColor == "rgba(0, 0, 0)") {
                return;
            } else {
                this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            }
            break;
        case "rainbow":
            this.style.backgroundColor = `hsl(${Math.floor(Math.random()*350)}, 100%, 80%)`;
            this.classList.remove("grey");
            break;
        case "erase":
            this.style.backgroundColor = ""
            break;
        default:
            this.style.backgroundColor = "black";
            this.classList.remove("grey");
            break;

    }
}

function clearGrid () {
    let pixels = container.querySelectorAll("div");
    pixels.forEach(pixel => pixel.style.backgroundColor = "")
}

//default pixel size
createGrid(10);

btnSize.addEventListener("click", pixelSize);
btnRainbow.addEventListener("click", () => color = "rainbow");
btnGrey.addEventListener("click", () => color = "grey-scale");
btnErase.addEventListener("click", () => color = "erase");
btnClear.addEventListener("click", clearGrid)
btnBlack.addEventListener("click", () => color = "")

const allButtons = Array.from(document.querySelectorAll("button"));
allButtons.forEach(button => button.addEventListener("mouseover", () => button.style.backgroundColor = "grey"))
allButtons.forEach(button => button.addEventListener("mouseout", () => button.style.backgroundColor = ""))







