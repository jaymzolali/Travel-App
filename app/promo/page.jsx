import React from 'react'
import './promo.css'
import Footer from '../components/footer/Footer';


const Promo = () => {
  return (
    <div className="promo">
      <div className='bg-gray-100 p-4'>
        <div className="card1 pb-4 rounded-b-lg">
          <div className="card1-img"></div>
          <p className="px-4 pt-3">Explore the world with up to 15% discounts <br />now!</p>
          <small className="px-4 text-gray-400">Booking period: Now - 31 Oct 2023</small>
        </div>
      </div>
      <div className='bg-gray-100 p-4'>
        <div className="card1 pb-4 rounded-b-lg">
          <div className="card1-img"></div>
          <p className="px-4 pt-3">Hotel New User Coupon&#128153;</p>
          <small className="px-4 text-gray-400">Use code: WELCOMEYOU</small>
        </div>
      </div>
      <div className='bg-gray-100 p-4'>
        <div className="card1 pb-4 rounded-b-lg">
          <div className="card1-img"></div>
          <p className="px-4 pt-3">Book your holiday trip to Malaysia</p>
          <small className="px-4 text-gray-400">Booking period: 1 Aug - 31 Dec 2023</small>
        </div>
      </div>
      <div className='bg-gray-100 p-4'>
        <div className="card1 pb-4 rounded-b-lg">
          <div className="card1-img"></div>
          <p className="px-4 pt-3">&#127905; Holiday Promo for you &#127905;</p>
          {/* <small className="px-4 text-gray-400">Booking period: Now - 31 Oct 2023</small> */}
        </div>
      </div>
      <div className='bg-gray-100 p-4'>
        <div className="card1 pb-4 rounded-b-lg">
          <div className="card1-img"></div>
          <p className="px-4 pt-3">Lets G0! with Travel-App</p>
          {/* <small className="px-4 text-gray-400">Booking period: Now - 31 Oct 2023</small> */}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Promo