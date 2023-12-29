import React from 'react'
import './payment.css'

const Payment = () => {
  return (
    <div className='sec'>
        <h1 className='pay-head font-bold mt-6 text-2xl grid place-items-center'>Payment Partners</h1>
        <div className="payment flex gap-4 mt-4">
            <div className="visa"></div>
            <div className="mastercard"></div>
            <div className="paypal"></div>
        </div>
    </div>
  )
}

export default Payment