const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
console.log(BASE_COLOR);
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currnetColor = title.style.color;
    if (currnetColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init()