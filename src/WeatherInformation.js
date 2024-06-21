import React from "react";
import "./css/Weather.css"
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import DateFormat from "./DateFormat";

export default function WeatherInformation(props) {
  return (
    <div className="WeatherInformation">
      <div className="CityOverview">
        <div className="Today">
          <DateFormat date={props.data.date} />
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="glass-container">
              <WeatherIcon
                code={props.data.icon}
                size={70}
                className="weather-icon img-fluid"
              />
              <h1 className="">{props.data.city}</h1>
              <h2 className="capitalize">{props.data.description}</h2>
              <div className="temperature-container">
                <WeatherTemp
                  celsius={props.data.temperature}
                  unit={props.unit}
                />
                <span className="unit-switch" onClick={props.changeUnit}>
                  {" "}
                  |{props.unit === "celsius" ? "°F" : "°C"}
                </span>
              </div>
              <p className="temperature mb-0">
                <i>
                  It Feels Like:{" "}
                  {Math.round(
                    props.unit === "celsius"
                      ? props.data.feelsLike
                      : props.data.feelsLike * (9 / 5) + 32
                  )}
                  °{props.unit === "celsius" ? "C" : "F"}
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

