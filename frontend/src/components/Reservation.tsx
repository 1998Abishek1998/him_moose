import Contact from "./Contact"
import ReservationForm from "./ReservationForm"

const Reservation = () => {
    return (
        <>
            <section id="reservation" className="reservation">
                <div className="section-title">
                    <h2>Make a Reservation</h2>
                </div>
                <div className="reservation-container">
                    <div className="reservation-info">
                        <h3>What to Expect at The Moose</h3>
                        <p>Western pub favorites with a bold Himalayan-South Asian twist</p>
                        <br />
                        <p>Signature fusion plates you won’t find anywhere else</p>
                        <br />

                        <p>Legacy of 30+ years as Shotz Bar & Grill</p>
                        <br />

                        <p>Craft beers, spiced cocktails, and tandoori perfection</p>
                        <br />

                        <p>A place to eat, drink, and explore new flavors</p>
                        <br />
                        <h3>Reservation hours:</h3>
                        <ul>
                            <li>Monday to Thursday: 5:00 PM - 10:00 PM</li>
                            <li>Friday and Saturday: 5:00 PM - 11:00 PM</li>
                            <li>Sunday: 5:00 PM - 9:00 PM</li>
                        </ul>
                        <br />
                        <p>Note<span style={{ color: 'red' }}> * </span> : We recommend making reservations at least 48 hours in advance to ensure availability.</p>
                    </div>
                    <ReservationForm />
                </div>
            </section>
            <Contact />

        </>
    )
}

export default Reservation