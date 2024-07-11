import React from 'react'
import { FaSearch } from "react-icons/fa";
import cloudyImg from "../assets/cloudy.png"

const WeatherApp = () => {
  return (
   <>
   <div className="container-fluid">
    <div className="row">
      <div className="col-3 border border-5 border-dark">
        <div className="row">
          <div className="col-12">
            <div className="input-group my-5">
              <input type="search" className='form-control'/>
              <button className='btn'><FaSearch /></button>
            </div>
          </div>
          <div className="col-12">
            <img src={cloudyImg} alt="" className='image-fluid' />
          </div>
          <div className="col-12">
            <span className='d-flex'><h1>6</h1><h4>°C</h4></span>
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
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default WeatherApp