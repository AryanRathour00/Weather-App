import { useState, useEffect } from "react";

function useWeatherForecast(location) {
  const [forecastData, setForecastData] = useState([]);
  let url = `https://weather-local-forecast.p.rapidapi.com/weather/?time=daily&location=${location}`;
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.withCredentials = true;
    xhr.setRequestHeader(
      "x-rapidapi-key",
      "5982c7d206mshc685d1791d1d35ep176e69jsnbc4f839aeb87"
    );
    xhr.setRequestHeader(
      "x-rapidapi-host",
      "weather-local-forecast.p.rapidapi.com"
    );
    xhr.onload = function () {
      let data = JSON.parse(this.responseText);
      setForecastData([...data.daily]);
    };
    xhr.send();
  }, [location]);
  return forecastData;
}

export default useWeatherForecast;
