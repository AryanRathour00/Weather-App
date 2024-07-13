import React from "react";
import { FaSearch } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";
import cloudyImg from "../assets/cloudy.png";

const WeatherApp = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 weather-sidebar p-5">
            <div className="row">
              <div className="col-12 mt-2">
                <div className="input-group mb-5">
                  <input type="search" className="form-control" placeholder="Search" />
                  <button className="btn btn-light">
                    <FaSearch />
                  </button>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center mb-3">
                <img src={cloudyImg} alt="" className="image-fluid weather-img" />
              </div>
              <div className="col-12 my-5">
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
          <div className="col-9 weather-description">
            <div className="row">
              <div className="col-12 px-5 mt-5 mb-4">
                <h1 className="fs-4">Today's Highlights</h1>
              </div>
              <div className="col-12 px-2 card-container mb-4">
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p className='mb-0'>Humidity</p>
                    <span className="fs-1">
                      <LuWaves />
                    </span>
                    <p className="mb-0 mt-2">
                      89<span>%</span>
                    </p>
                  </div>
                </div>
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p className='mb-0'>Humidity</p>
                    <span className="fs-1 ">
                      <LuWaves />
                    </span>
                    <p className="mb-0 mt-2">
                      89<span>%</span>
                    </p>
                  </div>
                </div>
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p className='mb-0'>Humidity</p>
                    <span className="fs-1 ">
                      <LuWaves />
                    </span>
                    <p className="mb-0 mt-2">
                      89<span>%</span>
                    </p>
                  </div>
                </div>
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p className='mb-0'>Humidity</p>
                    <span className="fs-1 ">
                      <LuWaves />
                    </span>
                    <p className="mb-0 mt-2">
                      89<span>%</span>
                    </p>
                  </div>
                </div>
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p className='mb-0'>Humidity</p>
                    <span className="fs-1 ">
                      <LuWaves />
                    </span>
                    <p className="mb-0 mt-2">
                      89<span>%</span>
                    </p>
                  </div>
                </div>
                <div className="card weather-desc-card">
                  <div className="card-body text-center">
                    <p className='mb-0'>Humidity</p>
                    <span className="fs-1 ">
                      <LuWaves />
                    </span>
                    <p className="mb-0 mt-2">
                      89<span>%</span>
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
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
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
                  <div className="card-body text-center">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
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
                  <div className="card-body text-center">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
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
                  <div className="card-body text-center">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
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
                  <div className="card-body text-center">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
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
                  <div className="card-body text-center">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
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
                  <div className="card-body text-center">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
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
                  <div className="card-body text-center">
                    <p>Wednesday, April 3</p>
                    <img src={cloudyImg} alt="" width={50} />
                    <p>heavy intensity rain</p>
                    <ul className="d-flex gap-3 mb-0 justify-content-center ps-0">
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
