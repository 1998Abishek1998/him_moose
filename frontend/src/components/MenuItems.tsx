
const MenuItems = () => {
    const menuItems = [
        {
            id: 1,
            name: "Maple Glazed Salmon",
            description: "Atlantic salmon fillets with a rich maple glaze, served with wild rice and seasonal vegetables.",
            price: "$29",
            image: "/api/placeholder/300/200",
            alt: "Maple Glazed Salmon"
        },
        {
            id: 2,
            name: "Classic Quebec Poutine",
            description: "Hand-cut fries topped with cheese curds and smothered in our signature gravy.",
            price: "$15",
            image: "/api/placeholder/300/200",
            alt: "Poutine"
        },
        {
            id: 3,
            name: "Alberta Bison Burger",
            description: "Grass-fed bison patty with aged cheddar, caramelized onions, and house aioli on a brioche bun.",
            price: "$24",
            image: "/api/placeholder/300/200",
            alt: "Bison Burger"
        },
        {
            id: 4,
            name: "Butter Tarts",
            description: "Traditional Canadian butter tarts with a flaky pastry shell and rich, gooey filling.",
            price: "$10",
            image: "/api/placeholder/300/200",
            alt: "Butter Tarts"
        },
        {
            id: 5,
            name: "Pan-Seared Arctic Char",
            description: "Delicate arctic char with a lemon herb butter, served with roasted root vegetables.",
            price: "$27",
            image: "/api/placeholder/300/200",
            alt: "Arctic Char"
        },
        {
            id: 6,
            name: "Niagara Ice Wine Flight",
            description: "A tasting flight of three premium Niagara region ice wines.",
            price: "$22",
            image: "/api/placeholder/300/200",
            alt: "Ice Wine"
        }
    ];

    return (
        <div className="menu-items">
            {menuItems.map((item) => (
                <div key={item.id} className="menu-item">
                    <img
                        height={300}
                        width={400}
                        src={item.image}
                        alt={item.alt}
                    />
                    <div className="menu-item-content">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p className="price">{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuItems;