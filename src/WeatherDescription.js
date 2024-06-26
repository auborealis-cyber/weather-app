import React from "react";
import "./css/WeatherDescription.css";
import logo from "./img/Au-logo.png";

export default function WeatherDescription(props) {
  return (
    <div className="WeatherDescription">
      <div className="row pt-1 ">
        <div className="col p-0">
          <div className="">
            <div className="card-body">
              <p className="temp-forecast"> Wind: {props.windSpeed} km/h</p>
            </div>
          </div>
        </div>
        <div className="col p-0">
          <div className="detail-card">
            <div className="card-body">
              <div className="temp-forecast img-fluid text-center">
                <a href="https://aurorathomas-portfolio.netlify.app/" target="_blank" rel="noreferrer" alt="portfolio-website">
                  <img src={logo} alt="aurora-thomas-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col p-0">
          <div>
            <div className="card-body">
              <p className="temp-forecast">Humidity: {props.humidity}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
