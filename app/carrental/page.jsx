"use client"
import React, { useState } from 'react'
import './carrental.css';
import Footer from '../components/footer/Footer'

const Carrental = () => {
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
    <div className="">
      <div className="rent-head rounded-b-xl h-6"></div>
      <div className="rentals px-4 bg-white py-4 shadow-xl">
        <h3 className="text-center mx-auto text-sm">Without Driver</h3>
        <form action="rentals">
            <small className="text-gray-600 pt-5">Your Rental Location</small> <br/>
            <div className="trans- flex gap-3 border-b border-gray-200">
              <div className="rentloc-img"></div>
              <input type="text" placeholder='Enter City or Region' className="border-0 outline-0 w-full mb-3"/>
            </div>
            <div className="datetime flex gap-4">
              <div className="date_start">
                <small className="text-gray-600">Rental Start Date</small>
                <div className='flex gap-3 border-b border-gray-200 w-full'>
                <div className="rentstart-img"></div>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="border-0 outline-0 mb-2 w-full"
                    />
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="border-0 outline-0 mb-2 w-full"
                />
              </div>
              </div>
            </div>
            <div className="datetime flex gap-4">
              <div className="date_end">
                <small className="text-gray-600">Rental End Date</small>
                <div className='flex gap-3 border-b border-gray-200 w-full'>
                <div className="rentend-img"></div>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="border-0 outline-0 mb-2 w-full"
                    />
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="border-0 outline-0 mb-2 w-full"
                />
              </div>
              </div>
            </div>

            <button className='bttn-car'>Search Car</button>
          </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Carrental