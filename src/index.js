import getWeather from "./Components/Weather app/Weather";

const input = document.querySelector("#search");
const button = document.querySelector("#submit");

const clearPage = () => {
    document.querySelector("#box").remove();
}

button.addEventListener("click", () => {
    if (document.querySelector("#box")) {
        clearPage();
    }
    getWeather(input.value);
})