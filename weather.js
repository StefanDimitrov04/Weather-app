        const apiKey = 'dc6cc46c5d59cf6e1be95529a0ce71b5';
        const apiURl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
        const searchBox = document.querySelector(".search input");
        const searchButton = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city) {
             const response = await fetch(apiURl + city + `&appid=${apiKey}`);
             let data = await response.json();

             if(response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
             } else {

             document.querySelector(".cityName").textContent = data.name;
             document.querySelector(".degrees").textContent = Math.round(data.main.temp) + "°C";
             document.querySelector(".humidity").textContent = data.main.humidity + "%";
             document.querySelector(".wind").textContent = data.wind.speed + " km/h";

             if(data.weather[0].main == "Clouds") {
                weatherIcon.src = "./images/clouds.png";
             } else if(data.weather[0].main == "Clear") {
                weatherIcon.src = "./images/clear.png";
             } else if(data.weather[0].main == "Drizzle") {
                weatherIcon.src = "./images/drizzle.png";
             } else if(data.weather[0].main == "Mist") {
                weatherIcon.src = "./images/mist.png";
             } else if(data.weather[0].main == "Rain") {
                weatherIcon.src = "./images/rain.png";
             }

             document.querySelector(".weather").style.display = "block";
             document.querySelector(".error").style.display = "none";
        }
    }

        searchButton.addEventListener("click", () => {
             checkWeather(searchBox.value);
        }) 
