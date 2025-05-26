import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            text: "The The Himalayan glazed salmon at The Himalayan Moose is absolutely divine. The flavor profile is complex yet harmonious, and the atmosphere makes for a perfect evening out.",
            author: "Sarah M.",
            role: "Toronto Food Critic",
            image: "/api/placeholder/50/50",
            alt: "Sarah M."
        },
        {
            id: 2,
            text: "As someone who grew up in Quebec, I can confidently say that The Himalayan Mooses poutine is the real deal. Their commitment to authentic Canadian cuisine is evident in every bite.",
            author: "Jean-Pierre L.",
            role: "Montreal Native",
            image: "/api/placeholder/50/50",
            alt: "Jean-Pierre L."
        },
        {
            id: 3,
            text: "The service at The Himalayan Moose is impeccable. Our server was knowledgeable about both the menu and the extensive Canadian wine list. We will definitely be returning!",
            author: "Emily & David K.",
            role: "Frequent Diners",
            image: "/api/placeholder/50/50",
            alt: "Emily and David K."
        }
    ];
    return (
        <section id="testimonials" className="testimonials">
            <div className="section-title">
                <h2>Guest Reviews</h2>
            </div>
            <div className="testimonials-container">
                {
                    testimonials.map(itm => (
                        <div key={itm.id} className="testimonial">
                            <div className="testimonial-text">
                                <p>{itm.text}</p>
                            </div>
                            <div className="testimonial-author">
                                <Image height={300} width={400} src={itm.image} alt={itm.alt} />
                                <div className="author-info">
                                    <h4>{itm.author}</h4>
                                    <p>{itm.role}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Testimonials