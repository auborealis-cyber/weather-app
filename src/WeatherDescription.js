import React from "react";


export default function WeatherDescription(props) {
  return (
    <div className="WeatherDescription">
      <div className="row pt-1 ">
        <div className="col p-0">
          <div className="">
            <div className="card-body">
              <p className="temp-forecast">Wind: {props.windSpeed} km/h</p>
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
