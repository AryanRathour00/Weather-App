import React from "react";
import { FaSearch } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";
import cloudyImg from "../assets/cloudy.png";

const WeatherApp = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 border border-5 border-dark weather-sidebar">
            <div className="row">
              <div className="col-12">
                <div className="input-group my-5">
                  <input type="search" className="form-control" />
                  <button className="btn">
                    <FaSearch />
                  </button>
                </div>
              </div>
              <div className="col-12">
                <img src={cloudyImg} alt="" className="image-fluid weather-img" />
              </div>
              <div className="col-12">
                <span className="d-flex">
                  <h1>6</h1>
                  <h4>°C</h4>
                </span>
              </div>
              <div className="col-12">
                <p>Feels Like 2°C</p>
                <p>Moderate rain</p>
                <p>Wednesday, April 3 at 4:57 AM</p>
                <p>New York, US</p>
              </div>
            </div>
          </div>
          <div className="col-9 border border-5 border-primary">
            <div className="row">
              <div className="col-12">
                <h1>Today's Highlights</h1>
              </div>
              <div className="col-12 px-5 card-container">
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p>Humidity</p>
                    <span>
                      <LuWaves />
                    </span>
                    <p>
                      89<span>%</span>
                    </p>
                  </div>
                </div>
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p>Humidity</p>
                    <span>
                      <LuWaves />
                    </span>
                    <p>
                      89<span>%</span>
                    </p>
                  </div>
                </div>
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p>Humidity</p>
                    <span>
                      <LuWaves />
                    </span>
                    <p>
                      89<span>%</span>
                    </p>
                  </div>
                </div>
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p>Humidity</p>
                    <span>
                      <LuWaves />
                    </span>
                    <p>
                      89<span>%</span>
                    </p>
                  </div>
                </div>
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p>Humidity</p>
                    <span>
                      <LuWaves />
                    </span>
                    <p>
                      89<span>%</span>
                    </p>
                  </div>
                </div>
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p>Humidity</p>
                    <span>
                      <LuWaves />
                    </span>
                    <p>
                      89<span>%</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <h1>This Week</h1>
              </div>
              <div className="col-12 px-5 card-container">
                <div className="card week-desc-card">
                  <div className="card-body">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0">
                      <li>
                        <p>8°C</p>
                      </li>
                      <li>
                        <p>8°C</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card week-desc-card">
                  <div className="card-body">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0">
                      <li>
                        <p>8°C</p>
                      </li>
                      <li>
                        <p>8°C</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card week-desc-card">
                  <div className="card-body">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0">
                      <li>
                        <p>8°C</p>
                      </li>
                      <li>
                        <p>8°C</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card week-desc-card">
                  <div className="card-body">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0">
                      <li>
                        <p>8°C</p>
                      </li>
                      <li>
                        <p>8°C</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card week-desc-card">
                  <div className="card-body">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0">
                      <li>
                        <p>8°C</p>
                      </li>
                      <li>
                        <p>8°C</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card week-desc-card">
                  <div className="card-body">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0">
                      <li>
                        <p>8°C</p>
                      </li>
                      <li>
                        <p>8°C</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card week-desc-card">
                  <div className="card-body">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0">
                      <li>
                        <p>8°C</p>
                      </li>
                      <li>
                        <p>8°C</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card week-desc-card">
                  <div className="card-body">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0">
                      <li>
                        <p>8°C</p>
                      </li>
                      <li>
                        <p>8°C</p>
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
