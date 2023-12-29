"use client"
import React, {useState} from 'react'
import './navbar.css'
import Link from 'next/link'

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };
  return (
    <main className='contain'>
      <div className='navbar'>
      <div className="hamb" onClick={toggleMenu}></div>
      <div className="logo flex items-center font-bold text-orange-50 text-lg"><Link href="/">Travel-<span className='text-purple-600'> App</span></Link></div>
      <Link href='/login' onClick={closeMenu}><div className="user"></div></Link>
    </div>
    {menuVisible && (
      <div className={`menue ${menuVisible ? 'open' : ''}`}>
        <div className="menu">
        <div className="close-icon" onClick={toggleMenu}>
            <span></span> {/* "X" icon for closing the menu */}
          </div>
        {/* Menu items go here */}
        <Link href="/" onClick={closeMenu} className="flex gap-2">
          <div className="home-img"></div>
          <h2 className="flex justify-center items-center text-xl pb-8">Home</h2>
        </Link>
        <Link href="/login" onClick={closeMenu} className="flex gap-2">
          <div className="log-img"></div>
          <h2 className="flex justify-center items-center text-xl pb-8">Log In / Register</h2>
        </Link>
        <Link href="/" onClick={closeMenu} className="flex gap-2">
          <div className="cntct-img"></div>
          <h2 className="flex justify-center items-center text-xl pb-8">Contact</h2>
        </Link>
        <Link href="/" onClick={closeMenu} className="flex gap-2">
          <div className="help-img"></div>
          <h2 className="flex justify-center items-center text-xl pb-8">Help Center</h2>
        </Link>
        <hr/>
        <Link href="/promo" onClick={closeMenu} className="flex gap-2 pt-3">
          <div className="promo-img"></div>
          <h2 className="flex justify-center items-center text-xl pb-8">Promo</h2>
        </Link>
        <Link href="/flights" onClick={closeMenu} className="flex gap-2">
          <div className="flight-img"></div>
          <h2 className="flex justify-center items-center text-xl pb-8">Flight</h2>
        </Link>
        <Link href="/hotels" onClick={closeMenu} className="flex gap-2">
          <div className="hotel-img"></div>
          <h2 className="flex justify-center items-center text-xl pb-8">Hotels</h2>
        </Link>
        <Link href="/xperience" onClick={closeMenu} className="flex gap-2">
          <div className="expi-img"></div>
          <h2 className="flex justify-center items-center text-xl pb-8">Xperience</h2>
        </Link>
        <Link href="/airport" onClick={closeMenu} className="flex gap-2">
          <div className="port-img"></div>
          <h2 className="flex justify-center items-center text-xl pb-8">Airport Transfer</h2>
        </Link>
        
        </div>
      </div>
    )}
    </main>
  )
}

export default Navbar