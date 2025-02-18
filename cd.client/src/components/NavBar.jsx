import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SidebarData } from './SideBar';
import "../App.css"

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(sidebar);

    return (
        <IconContext.Provider value={{ color: "undefined" }}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onclick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutLineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    }) }
                </ul>
            </nav>
        </IconContext.Provider>
    )
}

export default Navbar;               