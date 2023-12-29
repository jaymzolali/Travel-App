import Link from 'next/link'
import React from 'react'
import './login.css'

const page = () => {
  return (
    <div className='login'>
      <h2 className='font-bold'>Log in</h2>
      <p className='text-sm text-gray-500 mb-5 mt-2'>Login to enjoy exclusive deals, faster bookings,<br /> Travel-App Points and member-only <br/> benefits.</p>
      <form action="submit">
        <div className="email">
          <label htmlFor="email" className='font-bold text-sm'>Email or phone number</label> <br/>
          <input type="text" name="email" id="" />
        </div>
        <div className="password">
          <label htmlFor="password" className='font-bold text-sm'>Password </label> <br/>
          <input type="password" name="password" id="" />
        </div>
        <button className='btn'>LOG IN</button>
      </form>
      <hr/> 

      <Link href='https://facebook.com' className='face'>
        <div className="fb"></div>
        <h5>Facebook</h5>
      </Link>
      <Link href='https://google.com' className='goo'>
        <div className="google"></div>
        <h5>Google</h5>
      </Link>

      <div className="redirect flex justify-center mt-5">
        <Link href='/' className='font-bold text-blue-500'>Forgot Password</Link> <span className='brk mx-2'>|</span> <Link href='/create' className='font-bold text-blue-500'>No Account yet?</Link>
      </div>
    </div>
  )
}

export default page