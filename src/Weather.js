import React, {useState, useEffect, useCallback} from "react";
import "./css/Weather.css"
import axios from "axios";
import Forecast from "./Forecast";
import WeatherDescription from "./WeatherDescription";
import WeatherInformation from "./WeatherInformation";
import DateFormat from "./DateFormat";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    let handleResponse = useCallback((response) => {
        setWeatherData({
          ready: true,
          temp: response.data.main.temp,
          coordinates: response.data.coord,
          windSpeed: response.data.wind.speed,
          city: response.data.name,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          date: new Date(response.data.dt * 1000),
          icon: response.data.weather[0].icon,
        });
    }, []);
    useEffect(() => {
        const search = async () => {
          let apiKey = "de2c40e370d58e257faf07ba4ea95840";
          let units = "metric";
          let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
          try {
            await axios.get(apiUrl).then(handleResponse)
          } catch (error) {
            console.log(error);
          }
        };

    search();
    }, [city, handleResponse]);
    
    function handleSubmit(event) {
        event.preventDefault();
        setCity(event.target.elements.city.value);
    }
    
  const getCurrentLocation = (event) => {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let { latitude, longitude } = position.coords;
        let apiKey = "de2c40e370d58e257faf07ba4ea95840";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios
          .get(apiUrl)
          .then(handleResponse)
          .catch((error) => {
            console.error("error obtaining weather data:", error);
          });
      },
      (error) => {
        console.error("Error acquiring geolocation", error);
      }
    );
  };
    if (weatherData.ready) {
        return (
          <div className="Weather">
            <div className="row">
              <div className="Today">
                <DateFormat date={weatherData.date} />
              </div>
            </div>
            <div className="Form-2 text-center">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-3">
                    <button
                      type="button"
                      className="w-95 rounded btn main-buttons"
                      onClick={getCurrentLocation}
                    >
                      Your location
                    </button>
                  </div>
                  <div className="col-6">
                    <input
                      type="search"
                      placeholder="i.e. New York"
                      className="form-control"
                      autoFocus
                      name="city"
                    />
                  </div>
                  <div className="col-3">
                    <button
                      type="submit"
                      className="w-100 rounded btn main-buttons"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
              <WeatherInformation
                data={weatherData}
                unit={props.unit}
                changeUnit={props.changeUnit}
              />
            </div>
            <WeatherDescription
              windSpeed={weatherData.windSpeed}
              humidity={weatherData.humidity}
              unit={props.unit}
            />
            <Forecast
              coordinates={weatherData.coordinates}
              unit={props.unit}
              changeUnit={props.changeUnit}
            />
          </div>
        );
    } else {
        return null; 
        
    }
}