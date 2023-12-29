import React from 'react'
import './icon.css'
import Link from 'next/link'

const Icon = () => {
  return (
    <div>
        <nav className='grid grid-cols-5 mt-4 ml-2 mb-4'>
            <Link href="/flights" className='grid place-items-center'>
                <div className='flights'>
                    <div className='flight-icon grid place-items-center'></div>
                    <h3>Flights</h3>
                </div>
            </Link>
            <Link href="/hotels" className='grid place-items-center'>
            <div className='hotels'>
                    <div className='hotel-icon'></div>
                    <h3>Hotels</h3>
                </div>
            </Link>
            <Link href="/xperience" className='grid place-items-center'>
            <div className='xperience'>
                    <div className='xperience-icon'></div>
                    <h3>Xperi</h3>
                </div>
            </Link>
            <Link href="/airport" className='grid place-items-center'>
            <div className='airport'>
                    <div className='airport-icon'></div>
                    <h3>Trans</h3>
                </div>
            </Link>
            <Link href="/carrental" className='grid place-items-center'>
            <div className='carrental'>
                    <div className='carrental-icon'></div>
                    <h3>Rental</h3>
                </div>
            </Link>
        </nav>
    </div>
  )
}

export default Icon