const ip = document.querySelector("input");
const basic = document.querySelector("#default");
const debounce = document.querySelector("#debounce");
const throtle = document.querySelector("#throttle");

ip.addEventListener("input", (e) => {
    basic.innerText = ip.value;
    updateDebounce(ip.value);
    // throtle.innerText = ip.value;
});

const updateDebounce = debouncer(textValue => {
    debounce.innerText = textValue;
});

console.log("updateDebounce type", typeof updateDebounce);

function debouncer(cb, delay = 3000) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}
