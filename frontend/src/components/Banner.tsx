import { useNavigate } from "react-router-dom"
import OpeningSoonTag from "./tag/OpeningSoon"
import CustomButton from "./form/CustomButton"
import CustomLabel from "./form/Label"

const Banner = () => {
    const navigate = useNavigate()

    return (
        <section className="hero" id="home">
            <CustomLabel size="xl2" color="">Authentic Pub · Grill · Tandoor · Fusion Kitchen</CustomLabel>
            <br></br>
            <CustomLabel size={"lg"} color="">Not your average pub grub.Spice it up in style with Tandoori fire in Western flair. </CustomLabel>
            <br></br>
            <div className="relative inline-block">
                <div className="absolute -top-3 -right-10">
                    <OpeningSoonTag />
                </div>
                <CustomButton onClick={() => { navigate("/reservation") }} type="sec">Book a Table</CustomButton>
            </div>
        </section>
    )
}

export default Banner