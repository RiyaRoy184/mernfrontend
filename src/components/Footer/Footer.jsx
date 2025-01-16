import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <div className="logo">
             Grab & Go
            </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente laudantium, repellat, esse autem perspiciatis iure hic fuga perferendis ex delectus voluptatum inventore magni nostrum exercitationem totam consectetur saepe eligendi!</p>
                <div className="footer-social-icons">
                <i className="fa-brands fa-facebook fa-xl"></i>
                <i className="fa-brands fa-linkedin fa-xl"></i>
                <i className="fa-brands fa-twitter fa-xl"></i>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+1-212-456-7890</li>
                <li>contact@grab.com</li>
             </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 @ Grab.com - All Right Reserved.
        </p>
     </div>
  )
}

export default Footer