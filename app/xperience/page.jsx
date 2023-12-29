import React from 'react'
import './xperince.css';
import { datas } from './data';
import { Link } from 'next/link';

const Xperience = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-full bg-pink-200 h-10 rounded-b-lg mb-3">
        {/* <Link href='/'>Back</Link> */}
        <select name="" id="" className='outline-none rounded-lg mt-2 ml-[40%]'>
          <option value="">India</option>
          <option value="">Thailand</option>
          <option value="">Malaysia</option>
          <option value="">Philipine</option>
          <option value="">Vietnam</option>
        </select>
      </div>
      <div className="x-search outline-none mx-2 border-gray-100"><input type="text" placeholder='search city' /></div>
      <div className="xprn m-4">
      {datas.map(item => 
        <div key={item.id}>
          <div className="x-img"></div>
          <div className="x-city">{item.city}</div>
          <small className="x-price ml-[100px]">${item.price}</small>
        </div>)}
      </div>
    </div>
  )
}

export default Xperience