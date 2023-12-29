import React from 'react'
import './create.css'
import Link from 'next/link'

const page = () => {
  return (
    <main>
        <div className='crt-head flex bg-blue-900 px-5 py-5 gap-4 text-white'>
            <div className="crt-img"></div>
            <p>Become a member to receive exclusive <br />benefits and start earning Points!</p>
        </div>
        {/* end of head */}
        <div className='create'>

        {/* create account */}
        <h1 className='font-bold text-2xl my-3'>Create Account</h1>
        <form action="create">
            <div className="email">
                <label htmlFor="email" className='font-bold text-sm'>Email or phone number</label> <br/>
                <input type="text" name="email" id="" />
            </div>
            <div className="password">
                <label htmlFor="password" className='font-bold text-sm'>Password </label> <br/>
                <input type="password" name="password" id="" />
            </div>
            <div className="confirm-password">
                <label htmlFor="confirm-password" className='font-bold text-sm'>Confirm Password </label> <br/>
                <input type="password" name="password" id="" />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
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

        <p className="redirect flex justify-center mt-5">Aleady registered? <Link href='/login' className='text-blue-500 px-2'>Log in</Link></p>
    </div>
    </main>
  )
}

export default page