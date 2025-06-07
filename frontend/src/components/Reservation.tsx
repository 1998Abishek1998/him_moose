import Contact from "./Contact"
import CustomLabel from "./customInputs/Label"
import Title from "./customInputs/Title"
import ReservationForm from "./ReservationForm"

const Reservation = () => {
    return (
        <>
            <section id="reservation" className="reservation">
                <Title>
                    Make a reservation
                </Title>
                <div className="reservation-container">
                    <div className="reservation-info">
                        <CustomLabel color="" size="xl">What to Expect at The Moose</CustomLabel>
                        <br />
                        <br />

                        <CustomLabel size="sm" color="">Western pub favorites with a bold Himalayan-South Asian twist</CustomLabel>
                        <br />
                        <CustomLabel size="sm" color="">Signature fusion plates you won’t find anywhere else</CustomLabel>
                        <br />

                        <CustomLabel size="sm" color="">Legacy of 30+ years as Shotz Bar & Grill</CustomLabel>
                        <br />

                        <CustomLabel size="sm" color="">Craft beers, spiced cocktails, and tandoori perfection</CustomLabel>
                        <br />

                        <CustomLabel size="sm" color="">A place to eat, drink, and explore new flavors</CustomLabel>
                        <br />
                        <br />
                        <br />

                        <CustomLabel color="" size="xl">Reservation hours:</CustomLabel>
                        <br />

                        <ul>
                            <li>Monday to Thursday: 5:00 PM - 10:00 PM</li>
                            <li>Friday and Saturday: 5:00 PM - 11:00 PM</li>
                            <li>Sunday: 5:00 PM - 9:00 PM</li>
                        </ul>
                        <br />
                        <br />
                        <CustomLabel size="sm" color="">Note<span style={{ color: 'red' }}> * </span> : We recommend making reservations at least 48 hours in advance to ensure availability.</CustomLabel>
                    </div>
                    <ReservationForm />
                </div>
            </section>
            <Contact />

        </>
    )
}

export default Reservation