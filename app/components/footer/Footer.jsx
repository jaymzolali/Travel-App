import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='dark'>
      <div className="happy">
      <h1>Dont worry, be Happ-y</h1>
      <p>Thanks for using Travel-App</p>
      <div className="footer-socials flex">
        <div className="facebook"></div>
        <div className="instagram"></div>
        <div className="tiktok"></div>
        <div className="youtube"></div>
        <div className="x"></div>
      </div>
      </div>
      <hr />
      <div className="copyright">Copyright &copy; 2023 Travel App</div>
    </footer>
  )
}

export default Footer