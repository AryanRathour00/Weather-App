import {React, useState, useEffect} from "react";
import { FaSearch, FaCloud, FaCloudRain, FaBacon } from "react-icons/fa";
import { FaVolcano, FaWind, FaSun, FaRegSun } from "react-icons/fa6";
import { LuWaves } from "react-icons/lu";
import cloudyImg from "../assets/cloudy.png";

const WeatherApp = () => {

const [location , setLocation] = useState("New Delhi");
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

  const weatherInfo = () => {
    let url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("GET", url, true);
    xhr.setRequestHeader(
      "x-rapidapi-key",
      "5982c7d206mshc685d1791d1d35ep176e69jsnbc4f839aeb87"
    );
    xhr.setRequestHeader("x-rapidapi-host", "weatherapi-com.p.rapidapi.com");
    xhr.onload = function () {
       let weather = JSON.parse(this.response);
       setTemperature(weather.current.temp_c);
       setFeelsLike(weather.current.feelslike_c);
       setHumidity(weather.current.humidity);
       setWindSpeed(weather.current.wind_mph);
       setClouds(weather.current.cloud);
       setUVIndex(weather.current.uv);
       setPressure(weather.current.pressure_mb);

       setCity(weather.location.name);
       setCountry(weather.location.country);
       
       setWeatherText(weather.current.condition.text)
    };
    xhr.send();
  };

 useEffect(weatherInfo,[setLocation] );

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
                    onChange={(e)=>{
                      setLocation(e.target.value)
                    }}
                  />

                  <select className="form-select">
                    <option value="2">°C</option>
                    <option value="1">°F</option>
                  </select>
                  <button className="btn btn-light" onClick={weatherInfo}>
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
                <p>{city}, {country}</p>
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
                      {humidity} <span className=" text-gray fs-16">%</span>
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
                      {windSpeed} <span className=" text-gray fs-16">m/h</span>
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
                      {clouds} <span className=" text-gray fs-16">%</span>
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
                      {uvIndex} <span className=" text-gray fs-16">%</span>
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
                      {pressure} <span className=" text-gray fs-16">hPa</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 px-5 mb-4">
                <h1 className="fs-4">This Week</h1>
              </div>
              <div className="col-12 px-2 card-container mb-5">
                <div className="card week-desc-card">
                  <div className="card-body text-center">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p className=" text-gray fs-16 my-2">
                      heavy intensity rain
                    </p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card week-desc-card">
                  <div className="card-body text-center">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p className=" text-gray fs-16 my-2">
                      heavy intensity rain
                    </p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card week-desc-card">
                  <div className="card-body text-center">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p className=" text-gray fs-16 my-2">
                      heavy intensity rain
                    </p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card week-desc-card">
                  <div className="card-body text-center">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p className=" text-gray fs-16 my-2">
                      heavy intensity rain
                    </p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card week-desc-card">
                  <div className="card-body text-center">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p className=" text-gray fs-16 my-2">
                      heavy intensity rain
                    </p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card week-desc-card">
                  <div className="card-body text-center">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p className=" text-gray fs-16 my-2">
                      heavy intensity rain
                    </p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card week-desc-card">
                  <div className="card-body text-center">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p className=" text-gray fs-16 my-2">
                      heavy intensity rain
                    </p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card week-desc-card">
                  <div className="card-body text-center">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p className=" text-gray fs-16 my-2">
                      heavy intensity rain
                    </p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                      <li>
                        <p className="mb-0">8°C</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
