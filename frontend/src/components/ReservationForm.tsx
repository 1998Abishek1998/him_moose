import React from 'react'

const timeOptions = [
    { value: "", label: "Select Time" },
    { value: "17:00", label: "5:00 PM" },
    { value: "17:30", label: "5:30 PM" },
    { value: "18:00", label: "6:00 PM" },
    { value: "18:30", label: "6:30 PM" },
    { value: "19:00", label: "7:00 PM" },
    { value: "19:30", label: "7:30 PM" },
    { value: "20:00", label: "8:00 PM" },
    { value: "20:30", label: "8:30 PM" },
    { value: "21:00", label: "9:00 PM" }
];

const guestOptions = [
    { value: "1", label: "1 Person" },
    { value: "2", label: "2 People" },
    { value: "3", label: "3 People" },
    { value: "4", label: "4 People" },
    { value: "5", label: "5 People" },
    { value: "6", label: "6 People" },
    { value: "7", label: "7 People" },
    { value: "8", label: "8 People" }
];

const ReservationForm = () => {
    return (
        <div className="reservation-form">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" placeholder="Your Phone Number" />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <select id="time">
                        {
                            timeOptions.map(itm => (
                                <option key={itm.label} value={itm.value}>{itm.label}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="guests">Number of Guests</label>
                    <select id="guests" defaultValue={"2"}>
                        {
                            guestOptions.map(itm => (
                                <option key={itm.value} value={itm.value}>{itm.label}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="special">Special Requests</label>
                    <textarea id="special" rows={3} placeholder="Any special requests or dietary restrictions?"></textarea>
                </div>
                <button type="submit" className="btn">Confirm Reservation</button>
            </form>
        </div>
    )
}

export default ReservationForm