import React from "react";
import axios from "axios";

export default function Weather(props)
{
    function showTemp(response) {
        alert(`The temperature in ${response.data.name} is ${response.data.main.temp}`)
    }
        let apiKey = "de2c40e370d58e257faf07ba4ea95840";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(showTemp);
    return (
        <h2>Hello from Weather</h2>
    )
}