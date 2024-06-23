import React from 'react';

export default function WeatherTemp(props) {
    const fahrenheit = (props.celsius * 9 / 5) + 32;

    return (
      <div className="WeatherTemp">
        <span>
          {Math.round(props.unit === "celsius" ? props.celsius : fahrenheit)}
        </span>
        <span className="unit">{props.unit === "celsius" ? "°C" : "°F"}</span>
      </div>
    );
}