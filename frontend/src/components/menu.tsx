import { useCallback, useState } from "react"
import MenuItems from "./MenuItems"
import CustomButton from "./form/CustomButton"
import Title from "./form/Title"

function Menu() {
    const tabs = [
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
            <Title>What we serve</Title>
            <div className="flex flex-wrap mb-8 justify-center gap-1">
                {
                    tabs.map(itm => (
                        <CustomButton isActive={activeTab === itm.id} key={itm.id} onClick={() => handleTabChange(itm.id)} children={<>{itm.label}</>} type="pmy" />
                    ))
                }
            </div>
            <MenuItems activeTab={activeTab} />
        </section>
    )
}

export default Menu