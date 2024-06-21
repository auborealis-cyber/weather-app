import "./App.css";
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
        
      </header>
      <div>
        <Weather defaultCity="San Diego" unit={unit} changeUnit={changeUnit} />
      </div>
      <Forecast unit={unit} changeUnit={changeUnit} />
      <footer>
        This project was coded by
        <a href="www.linkedin.com/in/aurora--thomas">Aurora Thomas</a>,
        open-sourced on
        <a href="https://github.com/auborealis-cyber/weather-app">GitHub</a>
      </footer>
    </div>
  );
}
