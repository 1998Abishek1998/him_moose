
const Gallery = () => {
    const galleryItems = [
        {
            id: 1,
            src: "/resturant1.jpg",
            alt: "Restaurant Interior"
        },
        {
            id: 2,
            src: "/resturant2.avif",
            alt: "Food Plating"
        },
        {
            id: 3,
            src: "/resturant3.png",
            alt: "Chef Preparing Food"
        },
        {
            id: 4,
            src: "/resturant4.jpeg",
            alt: "Bar Area"
        },
        {
            id: 5,
            src: "/resturant5.jpg",
            alt: "Dessert Presentation"
        },
        {
            id: 6,
            src: "/resturant6.avif",
            alt: "Private Dining Area"
        },
        {
            id: 7,
            src: "/renturant7.jpg",
            alt: "Seasonal Special"
        },
        {
            id: 8,
            src: "/resturant2.avif",
            alt: "Outdoor Patio"
        }
    ];
    return (
        <section id="gallery" className="gallery">
            <div className="section-title">
                <h2>Gallery</h2>
            </div>
            <div className="gallery-container">
                {
                    galleryItems.map(itm => (
                        <div key={itm.id} className='gallery-items'>
                            <img height={300} width={400} src={itm.src} alt={itm.alt} />
                        </div>
                    ))
                }
            </div>
        </section>

    )
}

export default Gallery