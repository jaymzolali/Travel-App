import React from 'react'
import './flight.css'
import Footer from '../components/footer/Footer'
import Payment from '../components/payment/Payment'
import Destination from '../components/pop-destination/Destination'
import Airline from '../components/airline/Airline'
import Help from '../components/help/Help'
import BookFlight from './../components/book-flight/BookFlight';

const flights = () => {
  return (
    <div className="bg-gray-100">
      <BookFlight/>
      <Help className="mt-6"/>
      <Airline/>
      <Destination/>
      <Payment/>
      <Footer/>
    </div>
  )
}

export default flights