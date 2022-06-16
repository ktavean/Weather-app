import "./Weather.css";

const key = "7116002a174a015421ce618f1e16b246"
const container = document.querySelector("#container");

const displayWeather = (data) => {
    const box = document.createElement("div");
    box.setAttribute("id", "box");

    const topSide = document.createElement("div");
    topSide.setAttribute("id", "boxTop");

    const flag = document.createElement("img");
    flag.setAttribute("src", data.flag);

    const city = document.createElement("h2");
    city.textContent = data.name;

    const temp = document.createElement("h1");
    temp.textContent = `${data.main.temp} °F`;

    topSide.appendChild(flag);
    topSide.appendChild(city);

    box.appendChild(topSide);
    box.appendChild(temp);

    container.appendChild(box);
}

const getWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    const data = await response.json();
    const flag = `https://countryflagsapi.com/png/${data.sys.country}`;
    data["flag"] = flag;
    displayWeather(data);
}

// https://countryflagsapi.com/:filetype/:code


export default getWeather