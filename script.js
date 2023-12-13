const container = document.querySelector(".container");
const button = document.querySelector("button");

let userInput = 50;
const userNumber = userInput*userInput;
const boxSize = 320/userInput;

button.addEventListener("click", function() {
    userInput = 1;
})

for (let i = 0; i<userNumber; i++) {
let childDiv = document.createElement("div")
container.appendChild(childDiv);
childDiv.setAttribute("class", "children")
childDiv.style.height = `${boxSize}px`;
childDiv.style.width = `${boxSize}px`;
};

const children = Array.from(document.querySelectorAll(".children"));

children.forEach(function(child){
    child.addEventListener("mouseover", () => child.setAttribute("class", "children hover"))
})








