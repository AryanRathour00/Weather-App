import { React, useState, useEffect } from "react";
import { FaSearch, FaCloud, FaCloudRain, FaBacon } from "react-icons/fa";
import { FaVolcano, FaWind, FaSun, FaRegSun } from "react-icons/fa6";
import { LuWaves } from "react-icons/lu";
import cloudyImg from "../assets/cloudy.png";
import useWeatherInfo from "../hooks/useWeatherInfo";
import useWeatherForecast from "../hooks/useWeatherForecast";

const WeatherApp = () => {
  const [location, setLocation] = useState("New Delhi");
  const [temperature, setTemperature] = useState();
  const [feelsLike, setFeelsLike] = useState();
  const [humidity, setHumidity] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [clouds, setClouds] = useState();
  const [uvIndex, setUVIndex] = useState();
  const [pressure, setPressure] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [weatherText, setWeatherText] = useState();

  const weatherData = useWeatherInfo(location);
  const forecast = useWeatherForecast(location);

  const weatherInfo=()=>{
    setTemperature(weatherData.current.temp_c);
        setFeelsLike(weatherData.current.feelslike_c);
        setHumidity(weatherData.current.humidity);
        setWindSpeed(weatherData.current.wind_mph);
        setClouds(weatherData.current.cloud);
        setUVIndex(weatherData.current.uv);
        setPressure(weatherData.current.pressure_mb);
  
        setCity(weatherData.location.name);
        setCountry(weatherData.location.country);
  
        setWeatherText(weatherData.current.condition.text);
  }


  // useEffect(() => {
  //   weatherInfo();
  //   weatherForecast();
  // }, [setLocation]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 weather-sidebar p-5">
            <div className="row">
              <div className="col-12 mt-2">
                <div className="input-group mb-5">
                  <input
                    type="search"
                    className="form-control"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  />

                  <select className="form-select">
                    <option value="2">°C</option>
                    <option value="1">°F</option>
                  </select>
                  <button className="btn btn-light" onClick={()=>{
                    weatherForecast();
                    weatherInfo();
                  }}>
                    <FaSearch />
                  </button>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center mb-3">
                <img
                  src={cloudyImg}
                  alt=""
                  className="image-fluid weather-img"
                />
              </div>
              <div className="col-12 my-5">
                <span className="d-flex align-items-top gap-1">
                  <h1 className="mb-0 fs-22">{temperature}</h1>
                  <h4 className="mb-0 mt-3">°C</h4>
                </span>
              </div>
              <div className="col-12">
                <p>Feels Like {feelsLike}°C</p>
                <p>
                  <FaCloudRain /> {weatherText}
                </p>
                <p>Wednesday, April 3 at 4:57 AM</p>
                <p>
                  {city}, {country}
                </p>
              </div>
            </div>
          </div>
          <div className="col-9 weather-description">
            <div className="row">
              <div className="col-12 px-5 mt-5 mb-4">
                <h1 className="fs-4">Today's Highlights</h1>
              </div>
              <div className="col-12 px-2 card-container mb-4">
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p className="mb-0">Humidity</p>
                    <span className="fs-1 ">
                      <LuWaves />
                    </span>
                    <p className="mb-0 mt-2 fs-4">
                      {humidity} <span className="text-gray fs-16 fw-italic">%</span>
                    </p>
                  </div>
                </div>
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p className="mb-0">Wind Speed</p>
                    <span className="fs-1 ">
                      <FaWind />
                    </span>
                    <p className="mb-0 mt-2 fs-4">
                      {windSpeed} <span className="text-gray fs-16 fw-italic">m/h</span>
                    </p>
                  </div>
                </div>
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="fs-1">
                        <FaSun />
                      </span>
                      <ul className="mb-0 mt-3">
                        <li>
                          <p className="mb-0">6.35 AM</p>
                        </li>
                        <li>
                          <p className="mb-0">Sunrise</p>
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="fs-1">
                        <FaRegSun />
                      </span>
                      <ul className="mb-0 mt-3">
                        <li>
                          <p className="mb-0">7.22 PM</p>
                        </li>
                        <li>
                          <p className="mb-0">Sunset</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p className="mb-0">Clouds</p>
                    <span className="fs-1 ">
                      <FaCloud />
                    </span>
                    <p className="mb-0 mt-2 fs-4">
                      {clouds} <span className=" text-gray fs-16 fw-italic">%</span>
                    </p>
                  </div>
                </div>
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p className="mb-0">UV Index</p>
                    <span className="fs-1 ">
                      <FaBacon />
                    </span>
                    <p className="mb-0 mt-2 fs-4">
                      {uvIndex} <span className=" text-gray fs-16 fw-italic">%</span>
                    </p>
                  </div>
                </div>
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p className="mb-0">Pressure</p>
                    <span className="fs-1 ">
                      <FaVolcano />
                    </span>
                    <p className="mb-0 mt-2 fs-4">
                      {pressure} <span className=" text-gray fs-16 fw-italic">hPa</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 px-5 mb-4">
                <h1 className="fs-4">This Week</h1>
              </div>
              <div className="col-12 px-2 card-container mb-5">
              {forecast.map((element, index) => (
                  <div className="card week-desc-card" key={index}>
                    <div className="card-body text-center">
                      <p>Wednesday, April 3</p>
                      <img src={cloudyImg} alt="" width={50} />
                      <p className=" text-gray fs-16 my-2">{element.weather[0].description}</p>
                      <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
                        <li>
                          <p className="mb-0">{Math.floor(element.temp.max - 30)/2}°C</p>
                          <span className="text-gray fs-16 fw-italic">Max</span>
                        </li>
                        <li>
                          <p className="mb-0">{Math.floor(element.temp.min - 30)/2}°C</p>
                          <span className="text-gray fs-16 fw-italic">Min</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
