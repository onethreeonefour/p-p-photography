import React from 'react'

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <div className="contact-grid">
                <div>
                    <h2>Make An Enquiry</h2>
                    <h3>Phone Number</h3>
                    <p>(03)9999 4582</p>
                    <h3>Our Office</h3>
                    <p>87th Banksia Rd, Victoria 3000</p>
                    <div className="trading-hours">
                        <p>Mon-Fri: 9pm - 5pm</p>
                        <p>Sat-Sun: Only By Special Request</p>
                    </div>
                </div>
                <div>
                    <h2>Email Us</h2>
                    <label>Name</label>
                    <input></input>
                    <label>Email</label>
                    <input></input>
                    <label>Enquiry</label>
                    <textarea></textarea>
                    <a href="#hero">Submit</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
