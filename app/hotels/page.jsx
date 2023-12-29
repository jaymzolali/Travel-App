"use client";
import React, {useState} from 'react'
import Footer from '../components/footer/Footer'
import Payment from '../components/payment/Payment'
import Destination from '../components/pop-destination/Destination';
import Help from '../components/help/Help'
import Hotel from '../components/hotels/Hotel';
import './hotel.css';

const Hotels = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };


  return (
    <div className='bg-gray-100'>
      <div className="hotel-form rounded-lg bg-white shadow-lg mx-4 p-5">
        <form action="search-hotels">
          <label htmlFor="">Select Destination</label> <br/>
          <div className='flex gap-3 border-b border-gray-200'>
            <div className="dest-img"></div>
            <input type="text" name="" id="" placeholder="Search Hotels" className="border-0 outline-0 mb-2 w-full"/>
          </div>
          <div className="check-in flex gap-2 mt-2">
            <div className="check1">
              <label htmlFor="">Check-in</label>
              <div className='flex gap-3 border-b border-gray-200'>
                <div className="cal-img"></div>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="border-0 outline-0 mb-2 w-full"
                    />
              </div>
            </div>
            <div className="nights border-b border-gray-200">
              <label htmlFor="">Stay Duration</label> <br />
              <input type="text" placeholder='1 night(s)' className="border-0 outline-0 mb-2 w-full"/>
            </div>
          </div>
          <div className="rooms border-b border-gray-200 mt-2">
            <label htmlFor="">Room(s) & Total Guest(s)</label>
            <div className="room- flex">
              <div className="room-img"></div>
              <input type="text" placeholder='1 room(s), 1 guest' className="border-0 outline-0 w-full"/>
            </div>
          </div>
          <button type="submit" className="btn">SEARCH NOW</button>
        </form>
      </div>
      <Help/>
      <Hotel/>
      <Destination/>
      <Payment/>
      <Footer/>
    </div>
  )
}

export default Hotels