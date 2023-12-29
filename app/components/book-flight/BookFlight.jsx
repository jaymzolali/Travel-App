"use client"
import {useState} from 'react'
import './bookflight.css';

const BookFlight = () => {
    //  const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className='bflight bg-gray-100 shadow-sm'>
        <h1 className='boo_ font-bold text-3xl px-4 text-white pt-4 pb-60 rounded-b-lg'>From Southeast Asia to <br />the world, All yours.</h1>
        <div className="departure mx-4 px-3">
            <div className="from py-2">
                <h2>From</h2>
                <div className="from flex gap-3 border-b-2 border-gray-300">
                    <div className="frm-img"></div>
                    <input type="text" className='border-none outline-none' placeholder="City, Airport or Hotel"/>
                </div>
            </div>
            <div className="to py-2">
            <h2>To</h2>
                <div className="from flex gap-3 border-b-2 border-gray-300">
                    <div className="to-img"></div>
                    <input type="text" className='border-none outline-none' placeholder="City, Airport or Hotel"/>
                </div>
            </div>
            <div className="date py-2">
                <h2>Departure Date</h2>
                <div className="dep-date flex gap-3 border-b-2 border-gray-300">
                    <div className="dep-date-img"></div>
                    <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="border-0 outline-0"
                    />
                </div>
            </div>
            <div className="passengers flex gap-3">
                <div className="pass">
                    <h2>Passenger</h2>
                    <div className="flex gap-2 border-b-2 border-gray-300 w-full">
                        <div className="pass-img"></div>
                        <input placeholder="e.g 1 passenger(s)" className='border-0 outline-0 w-1/2'/>
                    </div>                  
                </div>
                <div className="pass-class">
                    <h2>Seat Class</h2>
                    <div className="flex gap-2 border-b-2 border-gray-300 w-full">
                        <div className="seat-img"></div>
                        <input placeholder="Economy" className='border-0 outline-0 w-1/2'/>
                    </div>                 
                </div>
            </div>
            <button className='btn'>Search</button>
        </div>
    </div>
  )
}

export default BookFlight