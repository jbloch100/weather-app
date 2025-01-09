async function getWeather() 
{
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }
    
    try {
        const response = await fetch(`http://localhost:5000/weather?city=${city}`);
        const data = await response.json();
        
        if (data.error) {
            document.getElementById("weather-result").innerHTML = `<p>Error: ${data.error}</p>`;
        } else {
            document.getElementById("weather-result").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
            `;
        }
    } catch (error) {
        console.log("Error fetching data:", error);
        document.getElementById("weather-result").innerHTML = `<p>Error fetching weather data</p>`;
    }
}