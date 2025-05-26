import MapHandler from "./MapHandler"

const Contact = () => {

    return (
        <section id="contact" className="contact">
            <div className="section-title">
                <h2>Contact Us</h2>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <div className="contact-details">
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>3350 34 St NE, Calgary, AB T1Y 6Z8</p>
                        </div>
                        {/* <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <p>(416) 555-7890</p>
                        </div> */}
                        {/* <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <p>info@The HimalayanMoose.ca</p>
                        </div> */}
                        <div className="contact-item">
                            <i className="fas fa-clock"></i>
                            <p>
                                Monday to Thursday: 5:00 PM - 10:00 PM<br />
                                Friday and Saturday: 5:00 PM - 11:00 PM<br />
                                Sunday: 5:00 PM - 9:00 PM
                            </p>
                        </div>
                    </div>
                    {/* <div className="social-links">
                        <a href="#" className="btn">Follow us on Instagram</a>
                    </div> */}
                </div>
                <MapHandler />
            </div>
        </section>)
}

export default Contact