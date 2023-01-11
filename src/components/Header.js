import { useState, useEffect } from 'react';
import {Link}  from "react-router-dom"
import {Menu} from './Menu';

function Header({ onMenuToggle, onMenuItemClick }){ 

    const [isActive, setIsActive] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return(
    <header className={isActive ? 'header active' : 'header' }>
        <div className="container">
            <div className="row">
                <div className="header-inner">
                      <figure>
                        <Link to="/">
                          <img width={90} height={37} src="https://vicso-name.github.io/rba/img/logo.png" className="logo" alt="main_logo"/>
                        </Link>
                      </figure>
                      <Menu/>
                </div>
           </div>
        </div>
    </header>
     
) }

export default Header;