import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OpeningSoonTag from "./tag/OpeningSoon";

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/menu', label: 'Menu' },
    { href: '/reservation', label: 'Reservation' },
];

const Header: React.FC = () => {

    const [activeTab, setActiveTab] = useState('');
    const navigate = useNavigate()
    const handleNavClick = (href: string) => {
        setActiveTab(href);
        navigate(href)
    };

    return (
        <header>
            <nav className="navbar">
                <div className="logo" onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("/")
                }}
                >
                    <img src={"/banner.png"} alt='Logo' height={50} width={55} />
                    <OpeningSoonTag/>
                </div>
                <ul className="nav-links">
                    {
                        navItems.map(itm => (
                            <li key={itm.href} className={activeTab === itm.href ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleNavClick(itm.href)
                                }}
                            >
                                <a href={itm.href}>{itm.label}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>

    );
}

export default Header