import { useCallback, useState } from "react"
import MenuItems from "./MenuItems"

function Menu() {
    const tabs = [
        {
            id: 1,
            label: 'All'
        },
        {
            id: 2,
            label: 'Starters'
        },
        {
            id: 3,
            label: 'Mains'
        },
        {
            id: 4,
            label: 'Desserts'
        },
        {
            id: 5,
            label: 'Drinks'
        },
    ]

    const [activeTab, setActive] = useState(1)

    const handleTabChange = useCallback((id: number) => {
        setActive(id)
    }, [])

    return (
        <section id="menu">
            <div className="section-title">
                <h2>Our Menu</h2>
            </div>
            <div className="menu-tabs">
                {
                    tabs.map(itm => (
                        <button key={itm.id} className={`tab-btn ${activeTab === itm.id ? 'active' : ''}`} onClick={() => handleTabChange(itm.id)}>{itm.label}</button>
                    ))
                }
            </div>
            <MenuItems />
        </section>
    )
}

export default Menu