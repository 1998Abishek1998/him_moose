/* eslint-disable @typescript-eslint/no-explicit-any */

const menuData = {
    "appetizers": [
        {
            "name": "SZECHUAN LETTUCE WRAPS",
            "description": "Grilled chicken, chow mein, mixed vegetables, sweet and spicy sauce, peanuts.",
            "price": 17.5
        },
        {
            "name": "BRUSCHETTA",
            "description": "Diced tomato, shredded parmesan, pesto and balsamic on an artisan baguette.",
            "price": 14
        },
        {
            "name": "POT STICKERS",
            "description": "Chicken & vegetable dumplings served with soya sauce and chili oil.",
            "price": 14
        },
        {
            "name": "CALAMARI",
            "description": "In-house breaded calamari, garnished with mixed onions, and served with house-made Tzatziki.",
            "price": 15.5
        },
        {
            "name": "POTATO SKINS",
            "description": "Bacon, shredded cheese, onion, and tomato baked in crispy potato skins.",
            "price": 15
        },
        {
            "name": "BLACKENED STEAK STRIPS",
            "description": "6oz Alberta AAA sirloin served with chippers and cayenne aioli.",
            "price": 17.5
        },
        {
            "name": "CHICKEN FINGERS",
            "description": "House-made chicken fingers served with fries and plum sauce. Dipping sauce substitutions available by request.",
            "price": 16.5
        },
        {
            "name": "CRISPY PICKLE SPEARS",
            "description": "Crispy fried pickle spears served with ranch.",
            "price": 15
        },
        {
            "name": "POUTINE",
            "description": "Cheese curd, fries, house-made gravy. + Beef Brisket $4 + BBQ Pulled Pork $4",
            "price": 13
        },
        {
            "name": "PEROGY POUTINE",
            "description": "",
            "price": 15
        }
    ],
    "forTheGroup": [
        {
            "name": "NACHO PLATTER",
            "description": "House made tri-coloured corn chips, marble cheese, green onions, black olives, jalapenos, and tomato served with salsa and sour cream. (Serves 3-4 people)",
            "price": "FULL 25 | HALF 19",
            "addOns": "ADD Cajun Chicken or beef +4.5 / Guacamole +3 Extra Cheese, salsa or sour cream +3"
        },
        {
            "name": "BOOTKICKER PLATTER",
            "description": "Crispy pickle spears, mozza sticks, chicken wings, potato skins, and nacho chips served with sour cream, salsa, and marinara sauce. (Serves 4-6 people) *no alterations or substitutions.",
            "price": 48
        },
        {
            "name": "WING PLATTER",
            "description": "40 Wings, 4 flavors of your choice. Ranch, Blue Cheese and Vegetables",
            "price": 62
        },
        {
            "name": "SPINACH INFERNO DIP",
            "description": "Spinach and herb cream cheese, mild hot sauce, panko crusted with a blend of cheeses. Served with nacho chips and naan wedges.",
            "price": 17,
            "addOns": "ADD $2 Choice of lobster or baby shrimp"
        }
    ],
    "saladsAndSoups": [
        {
            "name": "ADD grilled chicken/blacked chicken +7 | Add Salmon +8",
            "description": "",
            "price": null
        },
        {
            "name": "SOUP OF THE DAY",
            "description": "A bowl of the Chef's daily creation, served with garlic baguette.",
            "price": 7
        },
        {
            "name": "CAESER SALAD",
            "description": "Romaine lettuce, parmesan cheese, croutons.",
            "price": "STARTER 9 | FULL 14"
        }
    ]
};

export default function RestaurantMenu() {
    const MenuItem = ({ item }: any) => (
        <div className="flex justify-between items-start mb-6">
            <div className="flex-1 pr-4">
                <h3 className="font-bold text-gray-300 text-sm mb-1 uppercase tracking-wide">
                    {item.name}
                </h3>
                {item.description && (
                    <p className="text-gray-500 text-sm leading-relaxed mb-1">
                        {item.description}
                    </p>
                )}
                {item.addOns && (
                    <p className="text-gray-500 text-sm leading-relaxed">
                        {item.addOns}
                    </p>
                )}
            </div>
            {item.price && (
                <div className="text-gray-600 font-semibold text-sm whitespace-nowrap">
                    {typeof item.price === 'number' ? item.price : item.price}
                </div>
            )}
        </div>
    );

    const MenuSection = ({ title, items, titleColor = "text-orange-500" }: { title: string, items: any[], titleColor?: string }) => (
        <div className="mb-8">
            <div className="mb-6">
                <h2 className={`text-xl font-bold ${titleColor} uppercase tracking-wider mb-2`}>
                    {title}
                </h2>
                <div className={`h-0.5 ${titleColor === "text-orange-500" ? "bg-orange-500" : ""} w-full`}></div>
            </div>
            {items.map((item: any, index: any) => (
                <MenuItem key={index} item={item} />
            ))}
        </div>
    );

    return (
        <section>
            <div className="max-w-6xl mx-auto bg-black px-2 mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-2">
                    {/* Left Column */}
                    <div>
                        <MenuSection
                            title="APPETIZERS"
                            items={menuData.appetizers}
                        />
                    </div>

                    {/* Right Column */}
                    <div>
                        <MenuSection
                            title="4 THE GROUP"
                            items={menuData.forTheGroup}
                        />

                        <MenuSection
                            title="SALADS & SOUPS"
                            items={menuData.saladsAndSoups}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}