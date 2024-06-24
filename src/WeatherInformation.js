import React from "react";
import "./css/Weather.css"
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInformation(props) {
  return (
    <div className="WeatherInformation">
      <div className="CityOverview img-fluid">
        <div className="row">
          <div className="col">
            <div className="glass-container text-center">
              <WeatherIcon
                code={props.data.icon}
                size={80}
                className="weather-icon img-fluid"
              />
              <h1 className="">{props.data.city}</h1>
              <h2 className="capitalize">{props.data.description}</h2>
              <div className="temperature-container">
                <WeatherTemp celsius={props.data.temp} unit={props.unit} />
                <span className="unit-switch" onClick={props.changeUnit}>
                  {" "}
                  °{props.unit === "celsius" ? "F" : "C"}
                </span>
              </div>
              <p className="temperature mb-0">
                <i>
                  Feels Like:{" "}
                  {Math.round(
                    props.unit === "celsius"
                      ? props.data.temp
                      : props.data.temp * (9 / 5) + 32
                  )}
                  °{props.unit === "celsius" ? "C" : "F"}
                </i>
              </p>
            </div>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </div>
  );
}

