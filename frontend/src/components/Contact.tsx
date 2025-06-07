import CustomLabel from "./customInputs/Label"
import Title from "./customInputs/Title"
import MapHandler from "./MapHandler"

const Contact = () => {

    return (
        <section id="contact" className="contact">
            <Title>Contact Us</Title>
            <div className="contact-container">
                <div className="contact-info">

                    <div className="contact-details">
                        <CustomLabel size="lg" color="text-orange-600">Location </CustomLabel>
                        <br />
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <CustomLabel size="sm" color=""> 3350 34 St NE, Calgary, AB T1Y 6Z8</CustomLabel>
                        </div>
                        {/* <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <CustomLabel size="sm" color="">(416) 555-7890</CustomLabel>
                        </div> */}
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <CustomLabel size="sm" color="">info@himalayanmoose.com</CustomLabel>
                        </div>
                        <CustomLabel size="lg" color="text-orange-600">Reservation Hours </CustomLabel>
                        <br />
                        <div className="contact-item">
                            <i className="fas fa-clock"></i>
                            <CustomLabel size="sm" color="">
                                Monday to Thursday: 5:00 PM - 10:00 PM<br />
                                Friday and Saturday: 5:00 PM - 11:00 PM<br />
                                Sunday: 5:00 PM - 9:00 PM
                            </CustomLabel>
                        </div>
                    </div>
                    <div className="social-links">

                        <a href="https://www.facebook.com/profile.php?id=61576659279261" className="btn">Facebook</a>
                    </div>
                </div>
                <MapHandler />
            </div>
        </section>)
}

export default Contact