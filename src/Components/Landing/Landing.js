import React from 'react'
import Hero from '../../Images/0.jpg'
import GalleryPortfolio from '../Gallery/GalleryPortfolio'
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <>
            <div className="hero-container">
                <div className="hero-grid">
                    <div>
                        <h1>Beautiful Moments Captured</h1>
                        <h2>P&P Photography</h2>
                        <div className="hero-links">
                            <Link>Portfolio</Link>
                            <Link>Bio</Link>
                            <Link>Contact</Link>
                        </div>
                    </div>
                    <img src={Hero} alt="hero" />
                </div>
            </div>
            <div className="gallery-container">
                <GalleryPortfolio />
            </div>
        </>
    )
}

export default Landing
