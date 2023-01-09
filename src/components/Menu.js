import React, { useState, createContext, useEffect, useContext } from 'react';
import {Link}  from "react-router-dom"

export const MenuContext = createContext();


function Menu({ expanded, onMenuItemClick }){ 

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
      function handlePopState(event) {
        setMenuOpen(false);
      }
  
      window.addEventListener("popstate", handlePopState);
  
      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }, []);

    return(
        <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
        <div>

            <div className={menuOpen ? 'hamburger active' : 'hamburger'} onClick={() => setMenuOpen(!menuOpen)}>
                <div className="burger"></div>
            </div>


            <div className={menuOpen ? 'menu-wrapper active' : 'menu-wrapper'} >
                <ul>
                    <li  className="menu-item" ><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li className="menu-item" ><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
                    <li className="menu-item" ><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li className="menu-item" ><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
                    <li className="menu-item" ><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

                </ul>
            </div>


        </div>
        </MenuContext.Provider>
    );
}

function Logo() {
    const { menuOpen } = useContext(MenuContext);

    return (
        
        <Link to="/">
            <img  width={90} height={37} src="/img/logo.png" className={menuOpen ? 'active logo' : 'logo'} alt="Logo" />
        </Link>
    );
}

export { Menu, Logo };
