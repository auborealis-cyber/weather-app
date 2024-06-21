import React, { useEffect, useState } from "react";
import "./css/Forecast.css"
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import { MagnifyingGlass } from "react-loader-spinner";

let Forecast = ({ coordinates, unit }) => {
  let [currentTab, setCurrentTab] = useState("weekly");
  let [hourData, setHourData] = useState(null);
  let [weekData, setWeekData] = useState(null);
  let [loading, setLoading] = useState(true);

  let colors = [
    "#F10C15",
    "#0254E6",
    "#FFF579",
    "#E96F14",
    "#00AF4D",
    "#F57D20",
    "#CCE197",
  ];

  useEffect(() => {
    if (coordinates) {
      let apiKey = "de2c40e370d58e257faf07ba4ea95840";
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${
        coordinates.lat
      }&lon=${coordinates.lon}&appid=${apiKey}&units=${
        unit === "celsius" ? "metric" : "imperial"
      }`;
      axios.get(apiUrl).then((response) => {
        setHourData(response.data.hourly.slice(0, 15));
        setWeekData(response.data.daily.slice(0, 5));
        setLoading(false);
      });
    }
  }, [coordinates, unit]);

  let handleClick = (tab) => {
    setCurrentTab(tab);
  };

  if (loading) {
    return (
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#BA81F1"
      />
    );
  }
  return (
    <div className="Forecast">
      <div className="tab-bar">
        <div
          className={`tab ${currentTab === "weekly" ? "active" : ""}`}
          onClick={() => handleClick("weekly")}
        >
          Weekly Forecast
        </div>
        <div
          className={`tab ${currentTab === "hourly" ? "active" : ""}`}
          onClick={() => handleClick("hourly")}
        >
          Hourly Forecast
        </div>
      </div>
      {currentTab === "weekly" ? (
        <div className="weekly-forecast">
          {weekData.map((day, index) => (
            <div
              key={index}
              className="card"
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              <div className="card-body">
                <WeatherIcon
                  code={day.weather[0].icon}
                  animate={true}
                  size={75}
                />
                <div className="temp-forecast">
                  <span className="weekday">
                    {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </span>
                  <span className="temp">
                    Min {Math.round(day.temp.min)}° | Max{" "}
                    {Math.round(day.temp.max)}°
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="hourly-forecast">
          {hourData.map((hour, index) => (
            <div
              key={index}
              className="card"
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              <div className="card-body">
                <WeatherIcon
                  code={hour.weather[0].icon}
                  animate={true}
                  size={75}
                />
                <div className="temp-forecast">
                  <span className="weekday">
                    {new Date(hour.dt * 1000).getHours()}:00
                  </span>
                  <span className="temp"> {Math.round(hour.temp)}°</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Forecast;
