import React from 'react'
import Hero from '../../Images/0.jpg'
import GalleryPortfolio from '../Gallery/GalleryPortfolio'
import About from '../About/About'
import Contact from '../Contact/Contact'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

function Landing() {
    return (
        <>
            <div className="hero-container" id="hero">
                <div className="hero-grid">
                    <div>
                        <h1>Beautiful Moments Captured</h1>
                        <h2>P&P Photography</h2>
                        <div className="hero-links">
                            <a href="#gallery">Portfolio</a>
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                        </div>
                        <div className="social-links">
                            <FontAwesomeIcon icon={faCoffee} className='icon' />
                            <FontAwesomeIcon icon={faFacebook} className='icon' />
                            <FontAwesomeIcon icon={faInstagram} className='icon' />
                        </div>
                    </div>
                    <img src={Hero} alt="hero" />
                </div>
            </div>
            <div id="gallery">
                <GalleryPortfolio />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </>
    )
}

export default Landing
