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
    if (input.value === "") {
        input.value = "You gotta type a city here, bro";
    } else if (input.value === "You gotta type a city here, bro") {
        input.value = "I mean it, bro... Type it.";
    } else if (input.value === "I mean it, bro... Type it.") {
        input.value = "Last warning";
    } else if (input.value === "Last warning") {
        document.querySelector("body").remove();
        const body = document.createElement("body");
        const html = document.querySelector("html");
        body.textContent = "You broke it. Congrats... Was it worth it?";
        body.style.backgroundColor = "white";
        html.appendChild(body);

    } else {
        getWeather(input.value, unit.value);
        input.value = "";
    }
})