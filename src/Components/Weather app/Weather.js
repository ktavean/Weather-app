import "./Weather.css";

const key = "7116002a174a015421ce618f1e16b246"
const container = document.querySelector("#container");

const displayWeather = (data) => {
    const box = document.createElement("div");
    box.setAttribute("id", "box");

    const boxTop = document.createElement("div");
    boxTop.setAttribute("id", "boxTop");

    const boxMid = document.createElement("div");
    boxMid.setAttribute("id", "boxMid");

    const flag = document.createElement("img");
    flag.setAttribute("src", data.flag);

    const city = document.createElement("h2");
    city.textContent = data.name;

    const temp = document.createElement("h1");
    temp.textContent = `${data.main.temp} °F`;

    const desc = document.createElement("h2");
    desc.textContent = `Mainly ${data.weather[0].description}`;

    const minTemp = document.createElement("p");
    minTemp.textContent = `Min: ${data.main.temp_min}`;

    const maxTemp = document.createElement("p");
    maxTemp.textContent = `Max: ${data.main.temp_max}`;

    boxTop.appendChild(flag);
    boxTop.appendChild(city);

    boxMid.appendChild(minTemp);
    boxMid.appendChild(maxTemp);

    box.appendChild(boxTop);
    box.appendChild(temp);
    box.appendChild(desc);
    box.appendChild(boxMid);

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