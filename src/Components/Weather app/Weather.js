import "./Weather.css";

const key = "7116002a174a015421ce618f1e16b246"
const container = document.querySelector("#container");

const displayWeather = (data) => {
    const box = document.createElement("div");
    box.setAttribute("id", "box");

    const boxTop = document.createElement("div");
    boxTop.setAttribute("id", "boxTop");

    const boxCity = document.createElement("div");
    boxCity.setAttribute("id", "boxCity");

    const tempBox = document.createElement("div");
    tempBox.setAttribute("id", "tempBox");

    const boxTemps = document.createElement("div");
    boxTemps.setAttribute("id", "boxTemps");

    const minBox = document.createElement("div");
    minBox.setAttribute("id", "minBox");

    const maxBox = document.createElement("div");
    maxBox.setAttribute("id", "maxBox");

    const boxMid = document.createElement("div");
    boxMid.setAttribute("id", "boxMid");

    const midLeft = document.createElement("div");
    midLeft.setAttribute("id", "midLeft");

    const sunriseBox = document.createElement("div");
    sunriseBox.setAttribute("id", "sunriseBox");

    const sunsetBox = document.createElement("div");
    sunsetBox.setAttribute("id", "sunsetBox");

    const midRight = document.createElement("div");
    midRight.setAttribute("id", "midRight");

    const flag = document.createElement("img");
    flag.setAttribute("src", data.flag);

    const city = document.createElement("h2");
    city.textContent = data.name;

    const tempIcon = document.createElement("img");
    tempIcon.src = "./Assets/thermometer.svg";

    const temp = document.createElement("h1");

    const desc = document.createElement("h2");
    const descriptionString = data.weather[0].description.toString();
    desc.textContent = `Mainly ${descriptionString}`;

    const minIcon = document.createElement("img");
    minIcon.src = "./Assets/thermometer-low.svg";

    const minTemp = document.createElement("p");

    const maxIcon = document.createElement("img");
    maxIcon.src = "./Assets/thermometer-high.svg";

    const maxTemp = document.createElement("p");

    const feelsLike = document.createElement("p");

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    const pressure = document.createElement("p");
    const pressureString = data.main.pressure.toString().slice(0, 1) + "." + data.main.pressure.toString().slice(1)
    pressure.textContent = `Pressure: ${pressureString}`;

    const sunriseUnix = new Date(data.sys.sunrise * 1000);
    const sunriseHours = ("0" + sunriseUnix.getHours()).slice(-2);
    const sunriseMinutes = ("0" + sunriseUnix.getMinutes()).slice(-2);

    const sunriseIcon = document.createElement("img");
    sunriseIcon.src = "./Assets/weather-sunset-up.svg";
    const sunrise = document.createElement("p");
    sunrise.textContent = `${sunriseHours}:${sunriseMinutes}`;

    const sunsetUnix = new Date(data.sys.sunset * 1000);
    const sunsetHours = ("0" + sunsetUnix.getHours()).slice(-2);
    const sunsetMinutes = ("0" + sunsetUnix.getMinutes()).slice(-2);

    const sunsetIcon = document.createElement("img");
    sunsetIcon.src = "./Assets/weather-sunset-down.svg";
    const sunset = document.createElement("p");
    sunset.textContent = `${sunsetHours}:${sunsetMinutes}`;

    switch(data.unit) {
        case "F":
            temp.textContent = `${((data.main.temp - 273.15) * 1.8 + 32).toFixed(2)} °F`;
            minTemp.textContent = `${((data.main.temp_min - 273.15) * 1.8 + 32).toFixed(2)} °F`;
            maxTemp.textContent = `${((data.main.temp_max - 273.15) * 1.8 + 32).toFixed(2)} °F`;
            feelsLike.textContent = `Feels like: ${((data.main.feels_like - 273.15) * 1.8 + 32).toFixed(2)} °F`;
            break;
        case "C":
            temp.textContent = `${(data.main.temp - 273.15).toFixed(2)} °C`;
            minTemp.textContent = `${(data.main.temp_min - 273.15).toFixed(2)} °C`;
            maxTemp.textContent = `${(data.main.temp_max - 273.15).toFixed(2)} °C`;
            feelsLike.textContent = `Feels like: ${(data.main.feels_like - 273.15).toFixed(2)} °C`;
            break;
    }
    console.log(descriptionString.includes("cloud"));
    console.log(descriptionString.includes("clear"));
    if (descriptionString.includes("cloud")) {
        box.style.background = "url(./Assets/Images/clouds.jpg)";
    } else if (descriptionString.includes("clear")) {
        box.style.background = "url('./Assets/Images/clouds.jpg')";
    }

    boxCity.appendChild(flag);
    boxCity.appendChild(city);

    tempBox.appendChild(tempIcon);
    tempBox.appendChild(temp);

    minBox.appendChild(minIcon);
    minBox.appendChild(minTemp);

    maxBox.appendChild(maxIcon);
    maxBox.appendChild(maxTemp);

    boxTemps.appendChild(minBox);
    boxTemps.appendChild(maxBox);

    boxTop.appendChild(boxCity);
    boxTop.appendChild(tempBox);
    boxTop.appendChild(desc);
    boxTop.appendChild(boxTemps);

    midLeft.appendChild(feelsLike);
    midLeft.appendChild(humidity);
    midLeft.appendChild(pressure);

    sunriseBox.appendChild(sunriseIcon);
    sunriseBox.appendChild(sunrise);

    sunsetBox.appendChild(sunsetIcon);
    sunsetBox.appendChild(sunset);

    midRight.appendChild(sunriseBox);
    midRight.appendChild(sunsetBox);

    boxMid.appendChild(midLeft);
    boxMid.appendChild(midRight);

    box.appendChild(boxTop);
    box.appendChild(boxMid);

    container.appendChild(box);
}

const getWeather = async (city, unit) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    const data = await response.json();
    const flag = `https://countryflagsapi.com/png/${data.sys.country}`;
    data["flag"] = flag;
    data["unit"] = unit;
    displayWeather(data);
}

// https://countryflagsapi.com/:filetype/:code


export default getWeather