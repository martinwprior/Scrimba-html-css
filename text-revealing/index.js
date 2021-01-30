const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

// set a variable to keep track of program state
let shown = true;

function toggleText() {
    if (shown) {
        btn.innerText = "Show Text";
        text.style.opacity = 0;


    }
    else {
        btn.innerText = "Hide Text";
        text.style.opacity = 1;
    }
    shown = !shown;
}

// add event listenr

btn.addEventListener("click",() => {
    toggleText();
})