import CustomLabel from "./form/Label"
import Title from "./form/Title"

const About = () => {
    return (
        <section id="about">
            <Title>Out Story</Title>
            <br />
            <br />
            <div className="about-content">
                <div className="about-text">
                    <CustomLabel color="text-orange-600" size="lg">Food with Himalayan Heritage</CustomLabel>
                    <CustomLabel color="" size="sm">
                        The Himalayan Moose: Pub, Grill & Tandoor is a bold fusion of Western comfort food with a fiery Himalayan twist, blending the best of South Asian and Western cuisines.For over 30 years, this spot was known as Shotz Bar & Grill, a local favorite for great food, cold drinks, and good vibes. Now reborn as The Himalayan Moose, we have kept the spirit alive — and turned up the flavor.
                    </CustomLabel>
                    <CustomLabel color="" size="sm"> With over 25 years of culinary expertise, our chefs craft dishes that hit the perfect balance between familiar favorites and exotic flavors. From moose-inspired specials to smoky tandoori classics, every plate brings a story of cultures colliding — in the best way.
                    </CustomLabel>
                    <CustomLabel color="" size="sm">
                        Whether you are craving a spicy spin on pub fare or a hearty Himalayan-style grill, The Himalayan Moose serves up an unforgettable dining experience full of flavor, fire, and flair.
                    </CustomLabel>
                </div>
                <div className="about-image">
                    <img height={300} width={400} src="/moose_backgr.png" alt="Interior of The Himalayan Moose Restaurant" />
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="about-content">
                <div className="about-image">
                    <img height={300} width={400} src="/moose_backgr.png" alt="Interior of The Himalayan Moose Restaurant" />
                </div>
                <div className="about-text">
                    <CustomLabel color="text-orange-600" size="lg">Entertainment of VLT</CustomLabel>
                    <CustomLabel color="" size="sm">
                        At The Himalayan Moose, the excitement doesn’t stop at the table. Our lively VLT lounge features 11 different gaming machines, adding a thrilling twist to your dining experience. Whether you're trying your luck between bites of spicy chili momo or toasting a win with a craft beer, our VLTs keep the energy high and the good times rolling.
                    </CustomLabel>
                    <CustomLabel color="" size="sm">
                        Pair your gaming fun with drinks from our vibrant pub bar, where classic pours meet bold Himalayan-inspired flavors. Sip on frosty local drafts, handcrafted cocktails with a spicy kick, or fine whiskeys alongside sizzling tandoori platters.  It’s the perfect way to unwind with friends and turn any meal into a memorable night out.</CustomLabel>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="about-content">
                <div className="about-text">
                    <CustomLabel color="text-orange-600" size="lg">Pub and Bar</CustomLabel>
                    <CustomLabel color="" size="sm">
                        No visit to The Himalayan Moose is complete without exploring our vibrant pub bar, where classic pours meet bold Himalayan-inspired twists. Sip on frosty local drafts, creative cocktails infused with spices like cardamom and ginger, or a selection of fine whiskeys to complement your meal.
                    </CustomLabel>
                    <CustomLabel color="" size="sm">
                        Our bartenders craft each drink with the same passion as our chefs—whether you’re here for a refreshing mojito, a smoky mezcal old fashioned, or a warming chai-infused rum cocktail. Pair your picks with sizzling tandoori platters or bar bites, and let the flavors—and the conversation—flow.
                    </CustomLabel>
                </div>
                <div className="about-image">
                    <img height={300} width={400} src="/moose_backgr.png" alt="Interior of The Himalayan Moose Restaurant" />
                </div>
            </div>
        </section>)
}

export default About