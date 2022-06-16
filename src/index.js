import getWeather from "./Components/Weather app/Weather";

const container = document.querySelector("#container");
const input = document.querySelector("#search");
const button = document.querySelector("#submit");

const clearPage = () => {
    for (let i = 0; i <= container.childElementCount; i++) {
        container.children[0].remove();
    }
}

button.addEventListener("click", () => {
    getWeather(input.value);
})