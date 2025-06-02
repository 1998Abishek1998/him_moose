import { useEffect, useMemo, useState } from "react";

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: string;
    type: string;
    isCatering: boolean;
    image: string;
    alt: string;
}

const MenuItems = ({ activeTab }: { activeTab: number }) => {

    const menu = useMemo(() => [
        {
            id: 1,
            "section": "Appetizers & Small Bites",
            "items": [
                {
                    "id": 1,
                    "name": "Spicy Chili MoMo Dumplings",
                    "description": "Steamed or fried dumplings with a fiery chili kick",
                    "price": "$12",
                    "type": "appetizer",
                    "isCatering": true,
                    "image": "/api/placeholder/300/200",
                    "alt": "Momos"
                },
                {
                    "id": 2,
                    "name": "Tandoori Chicken Wings",
                    "description": "Himalayan-spiced wings marinated in yogurt",
                    "price": "$14",
                    "type": "appetizer",
                    "isCatering": true,
                    "image": "/api/placeholder/300/200",
                    "alt": "Chicken Wings"
                },
                {
                    "id": 3,
                    "name": "Moose Sliders",
                    "description": "Mini beef/chicken burgers with tamarind chutney",
                    "price": "$16",
                    "type": "appetizer",
                    "isCatering": true,
                    "image": "/api/placeholder/300/200",
                    "alt": "Sliders"
                }
            ]
        },
        {
            id: 2,
            "section": "Tandoori & Grill Specials",
            "items": [
                {
                    "id": 4,
                    "name": "Mixed Grill Platter",
                    "description": "Chicken tikka, seekh kebab, and lamb chops",
                    "price": "$28",
                    "type": "grill",
                    "isCatering": true,
                    "image": "/api/placeholder/300/200",
                    "alt": "Mixed Grill"
                },
                {
                    "id": 5,
                    "name": "Tandoori Salmon",
                    "description": "Salmon marinated in mustard and Kashmiri chili",
                    "price": "$26",
                    "type": "grill",
                    "isCatering": true,
                    "image": "/api/placeholder/300/200",
                    "alt": "Salmon"
                }
            ]
        },
        {
            id: 3,
            "section": "Pub-Style Mains",
            "items": [
                {
                    "id": 6,
                    "name": "Butter Chicken Mac & Cheese",
                    "description": "Creamy fusion favorite with tandoori chicken",
                    "price": "$18",
                    "type": "main",
                    "isCatering": true,
                    "image": "/api/placeholder/300/200",
                    "alt": "Mac and Cheese"
                },
                {
                    "id": 7,
                    "name": "Moose Meatballs",
                    "description": "Spiced meatballs in tomato-garlic gravy",
                    "price": "$20",
                    "type": "main",
                    "isCatering": true,
                    "image": "/api/placeholder/300/200",
                    "alt": "Meatballs"
                }
            ]
        },
        {
            id: 4,
            "section": "Sides & Breads",
            "items": [
                {
                    "id": 8,
                    "name": "Garlic Naan",
                    "description": "Freshly baked with roasted garlic",
                    "price": "$4",
                    "type": "side",
                    "isCatering": true,
                    "image": "/api/placeholder/300/200",
                    "alt": "Naan"
                },
                {
                    "id": 9,
                    "name": "Himalayan-style Masala Fries",
                    "description": "Crispy fries tossed in chaat masala",
                    "price": "$8",
                    "type": "side",
                    "isCatering": true,
                    "image": "/api/placeholder/300/200",
                    "alt": "Fries"
                }
            ]
        },
        {
            id: 5,
            "section": "Desserts",
            "items": [
                {
                    "id": 10,
                    "name": "Gulab Jamun Cheesecake",
                    "description": "Classic Indian sweet meets creamy cheesecake",
                    "price": "$10",
                    "type": "dessert",
                    "isCatering": true,
                    "image": "/api/placeholder/300/200",
                    "alt": "Cheesecake"
                },
                {
                    "id": 11,
                    "name": "Dark Chocolate Samosas",
                    "description": "Crispy pastry filled with molten chocolate",
                    "price": "$9",
                    "type": "dessert",
                    "isCatering": true,
                    "image": "/api/placeholder/300/200",
                    "alt": "Chocolate Samosas"
                }
            ]
        },
        {
            id: 6,
            "section": "Beverage Add-Ons",
            "items": [
                {
                    "id": 12,
                    "name": "Mango Ginger Fizz",
                    "description": "Sparkling mocktail with fresh mango and ginger",
                    "price": "$7",
                    "type": "drink",
                    "isCatering": true,
                    "image": "/api/placeholder/300/200",
                    "alt": "Mocktail"
                },
                {
                    "id": 13,
                    "name": "Craft Beer Tub",
                    "description": "Local IPA or lager selections (serves 8-10)",
                    "price": "$45",
                    "type": "drink",
                    "isCatering": true,
                    "image": "/api/placeholder/300/200",
                    "alt": "Beer Tub"
                }
            ]
        }
    ], [])

    const [menuItems, setMenuItems] = useState<MenuItem[]>([])

    useEffect(() => {
        const men = menu.find(itm => itm.id === activeTab)?.items
        if (men && men?.length) setMenuItems(men)
    }, [activeTab, menu])

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