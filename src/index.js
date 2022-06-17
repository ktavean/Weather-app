import getWeather from "./Components/Weather app/Weather";

const input = document.querySelector("#search");
const button = document.querySelector("#submit");
const unit = document.querySelector("#unit");

const clearPage = () => {
    document.querySelector("#box").remove();
}

unit.addEventListener("click", () => {
    if (unit.textContent === "°F") {
        unit.textContent = "°C";
        unit.value = "C";
    } else {
        unit.textContent = "°F";
        unit.value = "F";
    }
})

button.addEventListener("click", () => {
    if (document.querySelector("#box")) {
        clearPage();
    }
    getWeather(input.value, unit.value);
})