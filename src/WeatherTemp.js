import React from 'react';
import "./css/Weather.css"
export default function WeatherTemp(props) {
    const fahrenheit = (props.celsius * 9 / 5) + 32;

    return (
      <div className="WeatherTemp">
        <span>
          {Math.round(props.unit === "celsius" ? props.celsius : fahrenheit)}
          <span className="unit">{props.unit === "celsius" ? "°C " : "°F "}</span> |
        </span>
      </div>
    );
}