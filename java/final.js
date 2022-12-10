const button = document.getElementById("button");
const shapes = [
    "quad-circle",
    "ex",
    "cross",
    "square",
    "triangle-1",
    "triangle-2",
    "circle",
    "diamond",
    "star",
];

const colors = ["#FF0200", "#E87200", "#FFE400", "#00AC00", "#0C00FF", "#4B0082", "#EE82EE"];

const boxes = document.querySelectorAll(".container div");

let generatePattern = () => {
    boxes.forEach((box) =>{
        box.className ="";
        let i = Math.floor(Math.random() * shapes.length);
        let j = Math.floor(Math.random() * colors.length)
        box.classList.add(shapes[i]);
        box.style.backgroundColor = colors[j];
    });
};

button.addEventListener("click",generatePattern);
window.addEventListener("load", generatePattern);
