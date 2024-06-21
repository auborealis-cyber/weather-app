import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  let [unit, setUnit] = useState("celsius");
  const changeUnit = () => {
    setUnit((prevUnit) => (prevUnit === "celsius" ? "fahrenheit" : "celsius"));
  };
  return (
    <div className="App">
      <header className="App-header">
        Insert Date
      </header>
      <div>
        <Weather defaultCity="San Diego" unit={unit} changeUnit={changeUnit} />
      </div>
      <Forecast unit={unit} changeUnit={changeUnit} />
      <footer>
        This project was coded by 
        <a href="www.linkedin.com/in/aurora--thomas" target="_blank"> Aurora Thomas</a>,
        open-sourced on 
        <a href="https://github.com/auborealis-cyber/weather-app" target="_blank"> GitHub</a>
      </footer>
    </div>
  );
}
