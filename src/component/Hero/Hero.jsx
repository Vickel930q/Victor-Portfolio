import React from 'react'
import Image from 'next/image'
import './Hero.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import 'animate.css';

export default function Hero() {
    return (
        <div>
            <div className="hero-wrapper">
                <div className="hero-text">
                    <h1  className="animate__animated animate__fadeInDown">Victor Onyemachi</h1>
                    <div className="sub">
                         <span></span>
                    </div>
                    <div className="hero-icon animate__animated animate__bounceIn animate__delay-2s">
                        <li><FaInstagram /></li>
                        <li><FaFacebook /></li>
                        <li><FaWhatsapp /></li>
                        <li><FaXTwitter /></li>
                    </div>
                      
                        
                        
                        


                </div>
                <div className="hero-image animate__animated animate__fadeIn">
                    <Image src="/hero.jpg" alt="hero" width={400} height={400} />
                </div>






            </div>
        </div>
    )
}
