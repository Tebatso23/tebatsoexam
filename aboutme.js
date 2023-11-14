function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeather);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

async function showWeather(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
  const apiKey = "2718952144ed077c12e7c160fb6fc351";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    const here = document.getElementById("your-weather");
    const locationElement = document.getElementById("location");
    const conditionElement = document.getElementById("condition");
    const temperatureElement = document.getElementById("temperature");
    const countryElement = document.getElementById("country");
    
     here .textContent = ` ${"Here is your weather"}`;
    locationElement.textContent = `Location: ${data.name}`;
    conditionElement.textContent = `Condition: ${data.weather[0].description}`;
    temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
    countryElement.textContent = `Country Code: ${data.sys.country}`;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

//for map

  