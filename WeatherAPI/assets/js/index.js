const container = document.querySelector(".container");
const search = document.querySelector(".search-box");
const weatherbox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener('click' , ()=>{
    const apiKey = 'API - Key';
    const city = document.querySelector(".search-box input").value;

    if (city == '')
        return ;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(json => { 

            container.style.height = '555px';
            weatherbox.classList.add('active');
            weatherDetails.classList.add('active');

            const hum = document.querySelector(".weather-details .hum span");
            const wind = document.querySelector(".weather-details .wind span");
            const temp = document.querySelector(".weather-box .temp");
            const desc = document.querySelector(".weather-box .desc")
            
            temp.innerHTML = `${parseInt(json.main.temp)} <span>°C</span>`;
            desc.innerHTML = `${json.weather[0].description}`;
            hum.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
       
})
