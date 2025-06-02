import { useNavigate } from "react-router-dom"
import OpeningSoonTag from "./tag/OpeningSoon"

const Banner = () => {
    const navigate = useNavigate()

    return (
        <section className="hero" id="home">
            <h2>Authentic Pub · Grill · Tandoor · Fusion Kitchen</h2>
            <p>Not your average pub grub.Spice it up in style with Tandoori fire in Western flair. </p>
            <div className="relative inline-block">
                <div className="absolute -top-5 -right-10">
                    <OpeningSoonTag/>
                </div>
            <button onClick={() => { navigate("/reservation") }} className="btn">Book a Table</button>            
            </div>
        </section>
    )
}

export default Banner