const cityInput = document.getElementById("city");
const submitButton = document.getElementById("submit");

const displayHead = document.getElementById("head-title");
const displayStatus = document.getElementById("status");
const displayDesc = document.getElementById("description");
const displayTemp = document.getElementById("temp");
const displayFeels = document.getElementById("feels");
const displayPressure = document.getElementById("pressure");
const displayHumidity = document.getElementById("humidity");
const displayWind = document.getElementById("wind");

// please don't steal my api key :)
const apiKey = "9c90876792bd2297343d7cf096085561";

async function getWeather(location) {
  try {
    const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}&units=metric`;

    let response = await fetch(apiURL);
    let weather = await response.json();

    data = convertData(weather);
    console.log(data);
    updateDisplay(
      data.name,
      data.country,
      data.status,
      data.description,
      data.temp,
      data.feelsLike,
      data.pressure,
      data.humidity,
      data.windSpeed
    );
  } catch (err) {
    console.log("such does not exist! farewell!!");
  }
}

function convertData(weatherJson) {
  const name = weatherJson.name;
  const country = weatherJson.sys.country;
  const status = weatherJson.weather[0].main;
  const description = weatherJson.weather[0].description;
  const temp = weatherJson.main.temp;
  const feelsLike = weatherJson.main.feels_like;
  const pressure = weatherJson.main.pressure;
  const humidity = weatherJson.main.humidity;
  const windSpeed = weatherJson.wind.speed;

  return {
    name,
    country,
    status,
    description,
    temp,
    feelsLike,
    pressure,
    humidity,
    windSpeed,
  };
}

submitButton.onclick = () => submitForm();

cityInput.onkeyup = (e) => {
  if (e.keyCode == 13) {
    submitForm();
  }
};

function submitForm() {
  const city = cityInput.value;
  cityInput.value = "";
  console.log(city);
  getWeather(city);
}

function updateDisplay(
  name,
  country,
  status,
  description,
  temp,
  feelsLike,
  pressure,
  humidity,
  windSpeed
) {
  displayHead.textContent = name + ", " + country;
  displayStatus.textContent = status;
  displayDesc.textContent = description;
  displayTemp.textContent = temp + " C";
  displayFeels.textContent = feelsLike + " C";
  displayPressure.textContent = pressure + " hPa";
  displayHumidity.textContent = humidity + " %";
  displayWind.textContent = windSpeed + " m/s";
}
