const container = document.querySelector(".container");
const button = document.querySelector("button");


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
        child.addEventListener("mouseover", () => child.setAttribute("class", "children hover"))
    })
}

function pixelSize () {
    let pixels = container.querySelectorAll("div");
    pixels.forEach(pixel => pixel.remove());
    createGrid(window.prompt("give me a number between 1 - 50"));
}

createGrid(10);

button.addEventListener("click", pixelSize);










