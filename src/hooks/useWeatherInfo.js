import { useState, useEffect } from "react";

function useWeatherInfo(location) {
  const [weatherData, setWeatherData] = useState({});
  let url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`;
  useEffect(()=>{
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("GET", url, true);
    xhr.setRequestHeader(
      "x-rapidapi-key",
      "5982c7d206mshc685d1791d1d35ep176e69jsnbc4f839aeb87"
    );
    xhr.setRequestHeader("x-rapidapi-host", "weatherapi-com.p.rapidapi.com");
    xhr.onload = function () {
      let data = JSON.parse(this.responseText);
      setWeatherData({ ...data });
    };
    xhr.send();
  },[location])
 
  return weatherData;
}

export default useWeatherInfo;
