// let searchLocation = "Surabaya";
const apiKey = "9c90876792bd2297343d7cf096085561";

async function getWeather(location) {
  const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}&units=metric`;

  let response = await fetch(apiURL);
  let weather = await response.json();

  data = convertData(weather);
  console.log(data);
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
