"use client";
import React, { useState } from 'react'
import './airport.css'
import Help from '../components/help/Help';
import Destination from '../components/pop-destination/Destination';
import Footer from '../components/footer/Footer'



const Airport = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  const [selectedTime, setSelectedTime] = useState(timeString);

  const currentDate = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  return (
    <div className='bg-gray-100'>
      <h1 className='headd text-sm text-center text-white'>Airport Transfer</h1>
      <div className="port-trans mx-4 bg-white px-4 my-5 rounded-lg">
        <div className="form">
          <form action="transport">
            <small className="font-bold">From airport</small> <br/>
            <div className="trans- flex gap-3 border-b border-gray-200">
              <div className="tfrom-img"></div>
              <input type="text" placeholder='E.g. Narita International Airport' className="border-0 outline-0 w-full mb-3"/>
            </div>
            <small className="font-bold">To area, address, building</small> <br/>
            <div className="trans- flex gap-3 border-b border-gray-200">
              <div className="tto-img"></div>
              <input type="text" placeholder='E.g. Narita International Airport' className="border-0 outline-0 w-full mb-3"/>
            </div>
            <div className="datetime flex gap-4">
              <div className="date_">
                <small className="font-bold">Pick-up Date</small>
                <div className='flex gap-3 border-b border-gray-200'>
                <div className="daat-img"></div>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="border-0 outline-0 mb-2 w-full"
                    />
              </div>
              </div>
              <div className="time_">
                <small className="font-bold">Time</small>
                <div className='flex gap-3 border-b border-gray-200'>
                <div className="clock-img"></div>
                <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="border-0 outline-0 mb-2"
                />
              </div>
              </div>
            </div>

            <button className='bttn'>Search</button>
          </form>
        </div>
      </div>
      <Help/>
      <Destination/>
      <Footer/>
    </div>
  )
}

export default Airport