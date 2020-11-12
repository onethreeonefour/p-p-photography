import React from 'react'

function About() {
    return (
        <div className="about-container">
            <h1>ABOUT</h1>
            <div className="about-grid">
                <div className="about-info">
                    <h1>P&P Photography</h1>
                    <p>P&P Photography is a portrait and commercial photography agency we are based in Melbourne, VIC, Australia. <br /><br />With over 20 years of experience across our photography agents and clients across the world we guarantee we capture the moments you want.</p>
                    <h4>Our Clients Include</h4>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
                        <ul>
                            <li>Black Frame</li>
                            <li>Karla Otto</li>
                            <li>Raw Information Group</li>
                        </ul>
                        <ul>
                            <li>VOGUE</li>
                            <li>The Hinton Group</li>
                            <li>Jennifer Bett Communications</li>

                        </ul>
                    </div>
                    <a href="#contact">CONTACT</a>
                </div>
                <div>
                    <img src={`Images/Gallery/17.webp`} alt="contact"></img>
                </div>
            </div>
        </div >
    )
}

export default About
