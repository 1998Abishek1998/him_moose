import { useNavigate } from "react-router-dom"

const Banner = () => {
    const navigate = useNavigate()

    return (
        <section className="hero" id="home">
            <h2>Authentic Pub · Grill · Tandoor · Fusion Kitchen</h2>
            <p>Not your average pub grub.Spice it up in style with Tandoori fire in Western flair. </p>
            <button onClick={() => { navigate("/reservation") }} className="btn">Book a Table</button>
        </section>
    )
}

export default Banner